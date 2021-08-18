import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { plainToClass } from 'class-transformer';

import { CategoryService } from '../category/category.service';
import { SupplierService } from '../supplier/supplier.service';

import { Product } from '../product/product.entity';
import { ProductRepository } from '../product/product.reposity';

import { CreateMedicineDto } from './dtos/create-medicine.dto';
import { ReadMedicineDto } from './dtos/read-medicine.dto';

import { Medicine } from './medicine.entity';
import { MedicineRepository } from './medicine.repository';
import { LaboratoryRepository } from '../laboratory/laboratory.repository';
import { UpdateMedicineDto } from './dtos/update-medicine.dto';
import { Category } from '../category/category.entity';
import { CategoryRepository } from '../category/category.repository';
import { SupplierRepository } from '../supplier/supplier.reposity';

@Injectable()
export class MedicineService {
    constructor(
        @InjectRepository(MedicineRepository)
        private readonly _medicineRepository: MedicineRepository,
        private readonly _productRepository: ProductRepository,
        private readonly _laboratoryRepository: LaboratoryRepository,
        private readonly _categoryRepository: CategoryRepository,
        private readonly _supplierRepository: SupplierRepository
    ){}

    async findAll(): Promise<ReadMedicineDto[]> {
        const medicines: Medicine[] = await this._medicineRepository.find({
          relations: ['product', 'laboratory'],
          where: { status: 'ACTIVE' },
        });
    
        if (!medicines) {
          throw new NotFoundException('Medicines does not exits');
        }
    
        return medicines.map((medicine) => plainToClass(ReadMedicineDto, medicine));
      }
    
      async findOne(medicineId: number): Promise<ReadMedicineDto> {
        if (!medicineId) {
          throw new BadRequestException('Medicine id must be sent');
        }
        const medicine: Medicine = await this._medicineRepository.findOne(medicineId, {
          relations: ['product', 'laboratory'],
          where: { status: 'ACTIVE' },
        });
    
        if (!medicine) {
          throw new NotFoundException('Medicine does not exits');
        }
        return plainToClass(ReadMedicineDto, medicine);
      }
    
      async create(medicine: CreateMedicineDto): Promise<ReadMedicineDto> {
        
        const categoryExist: Category = await this._categoryRepository.findOne(medicine.category)

        if(!categoryExist){
            throw new NotFoundException('Category does not exits');
        }

        const supplierExist = await this._supplierRepository.findOne(medicine.supplier)

        if(!supplierExist){
            throw new NotFoundException('Suplier does not exits');
        }
        
        const product = new Product();
        product.name = medicine.nameMedicine;
        product.description = medicine.description;
        product.quantityPerUnit = medicine.quantityPerUnit;
        product.unitPrice = medicine.unitPrice;
        product.unitsInStock = medicine.unitsInStock;
        product.expirationDate = medicine.expirationDate;
        product.category = categoryExist;
        product.supplier = supplierExist;

        const newProduct = await this._productRepository.save(product);
        console.log('new ', newProduct)
        const laboratory = await this._laboratoryRepository.findOne(medicine.laboratory)

        if(!laboratory){
            throw new NotFoundException('Laboratory does not exits');
        }

        const createMedicine: Medicine = await this._medicineRepository.save({
          indications: medicine.indications,
          actions: medicine.actions,
          dose: medicine.dose,
          administrationRoute: medicine.administrationRoute,
          product: newProduct,
          laboratory  
        });
    
        return plainToClass(ReadMedicineDto, createMedicine);
      }
    
      async update(
        medicineId: number,
        medicine: UpdateMedicineDto,
      ): Promise<ReadMedicineDto> {
        const foundMedicine = await this._medicineRepository.findOne(medicineId);
    
        if (!foundMedicine) {
          throw new NotFoundException('Medicine does not exist');
        }
    
        await this._medicineRepository.update(medicineId, medicine);
    
        const updatedMedicine = await this._medicineRepository.findOne(medicineId, 
          {relations: ['product', 'laboratory']}
        );
    
        return plainToClass(ReadMedicineDto, updatedMedicine);
      }
    
      async delete(medicineId: number): Promise<void> {
        const medicineExist = await this._medicineRepository.findOne(medicineId, {
          where: { status: 'ACTIVE' },
        });
    
        if (!medicineExist) {
          throw new NotFoundException('Medicine does not exist');
        }
        await this._medicineRepository.update(medicineId, {
          status: 'INACTIVE',
        });
      }
}
