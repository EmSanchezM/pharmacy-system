import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { plainToClass } from 'class-transformer';
import { Repository } from 'typeorm';

import { Category } from '../category/category.entity';
import { Supplier } from '../supplier/supplier.entity';
import { Product } from './product.entity';

import { CreateProductDto } from './dtos/create-product.dto';
import { ReadProductDto } from './dtos/read-product.dto';
import { ProductRepository } from './product.reposity';
import { CategoryRepository } from '../category/category.repository';
import { SupplierRepository } from '../supplier/supplier.reposity';

@Injectable()
export class ProductService {
    constructor(
        @InjectRepository(ProductRepository) 
        private readonly _productReposity: ProductRepository,
        @InjectRepository(CategoryRepository)
        private readonly _categoryReposity: CategoryRepository,
        @InjectRepository(SupplierRepository)
        private readonly _supplierReposity: SupplierRepository
    ){}

    async findAll(): Promise<ReadProductDto[]>{
        const products : Product[] = await this._productReposity.find({
            relations: ['category', 'supplier'],
            where: { status: 'ACTIVE' }
        });

        if(!products){
            throw new NotFoundException();
        }

        return products.map(product => plainToClass(ReadProductDto, product));
    }

    async findOne(productId: number): Promise<ReadProductDto>{
        if(!productId){
            throw new BadRequestException('product id must be sent');
        }
        const product: Product = await this._productReposity.findOne(productId, {
            relations: ['category', 'supplier'],
            where: { status: 'ACTIVE' }
        });

        if(!product){
            throw new NotFoundException();
        }
        return plainToClass(ReadProductDto, product);
    }

    async create(product: CreateProductDto): Promise<ReadProductDto>{
        const categoryExist: Category = await this._categoryReposity.findOne(product.category, {
            where: { status: 'ACTIVE' }
        });

        const supplierExist: Supplier = await this._supplierReposity.findOne(product.supplier, {
            where: { status: 'ACTIVE' }
        });
        
        if(!categoryExist){
            throw new NotFoundException('Category does not exists');
        }
        if(!supplierExist){
            throw new NotFoundException('Supplier does not exists');
        }

        const createProduct : Product = await this._productReposity.save({
            name: product.name,
            description: product.description,
            quantityPerUnit: product.quantityPerUnit,
            unitPrice: product.unitPrice, 
            unitsInStock: product.unitsInStock,
            category: categoryExist,
            supplier: supplierExist
        });

        return plainToClass(ReadProductDto, createProduct);
    }

    async update(productId: number, product: CreateProductDto): Promise<ReadProductDto>{
        const foundProduct = await this._productReposity.findOne(productId, {
            relations: ['category', 'supplier'],
            where: { status: 'ACTIVE' }
        });

        if(!foundProduct){
            throw new NotFoundException('Product does not exist')
        }
        //TODO: corrections of method update
        //await this._productReposity.update(productId, product);
        
        return plainToClass(ReadProductDto, foundProduct);
    }

    async delete(productId: number): Promise<void>{
        const productExist = await this._productReposity.findOne(productId, {
            where: { status: 'ACTIVE'}
        });

        if(!productExist){
            throw new NotFoundException();
        }
        await this._productReposity.update(productId, {
            status: 'INACTIVE'
        })
    }


}
