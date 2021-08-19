import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { Connection } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { plainToClass } from 'class-transformer';

import { CreateMedicineDto } from './dtos/create-medicine.dto';
import { ReadMedicineDto } from './dtos/read-medicine.dto';
import { UpdateMedicineDto } from './dtos/update-medicine.dto';

import { Medicine } from './medicine.entity';
import { Product } from '../product/product.entity';
import { Category } from '../category/category.entity';

import { MedicineRepository } from './medicine.repository';
import { LaboratoryRepository } from '../laboratory/laboratory.repository';
import { CategoryRepository } from '../category/category.repository';
import { SupplierRepository } from '../supplier/supplier.reposity';

@Injectable()
export class MedicineService {
  constructor(
    @InjectRepository(MedicineRepository)
    private readonly _medicineRepository: MedicineRepository,
    private readonly _laboratoryRepository: LaboratoryRepository,
    private readonly _categoryRepository: CategoryRepository,
    private readonly _supplierRepository: SupplierRepository,
    private connection: Connection
  ) { }

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

  async create(medicineBody: CreateMedicineDto): Promise<ReadMedicineDto> {

    const categoryExist: Category = await this._categoryRepository.findOne(medicineBody.category)

    if (!categoryExist) {
      throw new NotFoundException('Category does not exits');
    }

    const supplierExist = await this._supplierRepository.findOne(medicineBody.supplier)

    if (!supplierExist) {
      throw new NotFoundException('Suplier does not exits');
    }

    const laboratory = await this._laboratoryRepository.findOne(medicineBody.laboratory)

    if (!laboratory) {
      throw new NotFoundException('Laboratory does not exits');
    }

    const queryRunner = this.connection.createQueryRunner();

    try {
      await queryRunner.connect();
      await queryRunner.startTransaction();

      const product = new Product();
      product.name = medicineBody.nameMedicine;
      product.description = medicineBody.description;
      product.quantityPerUnit = medicineBody.quantityPerUnit;
      product.unitPrice = medicineBody.unitPrice;
      product.unitsInStock = medicineBody.unitsInStock;
      product.expirationDate = medicineBody.expirationDate;
      product.category = categoryExist;
      product.supplier = supplierExist;

      const newProduct = await queryRunner.manager.save(product);

      const medicine = new Medicine();
      medicine.indications = medicineBody.indications;
      medicine.dose = medicineBody.dose;
      medicine.administrationRoute = medicineBody.administrationRoute;
      medicine.product = newProduct;
      medicine.laboratory = laboratory;

      await queryRunner.manager.save(medicine);
      await queryRunner.commitTransaction();

      return plainToClass(ReadMedicineDto, medicine);

    } catch (error) {
      await queryRunner.rollbackTransaction();
      throw new BadRequestException();
    } finally {
      await queryRunner.release();
    }
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
      { relations: ['product', 'laboratory'] }
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
