import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CreateSupplierDto, ReadSupplierDto } from './dtos';

import { SupplierService } from './supplier.service';

@Controller('supplier')
export class SupplierController {
    constructor(private readonly _supplierService: SupplierService){}

    @Get(':id')
    async findOneSupplier(@Param('id') id:number): Promise<ReadSupplierDto>{
        const supplier = await this._supplierService.findOne(id);
        return supplier;
    }

    @Get()
    async findAllSuppliers(): Promise<ReadSupplierDto[]>{
        const suppliers = await this._supplierService.findAll();
        return suppliers;
    }

    @Post()
    async createSupplier(@Body() supplier: CreateSupplierDto) : Promise<ReadSupplierDto>{
        const createdSupplier = this._supplierService.create(supplier);
        return createdSupplier;
    }

    @Put(':id')
    async updateCategory(@Param('id') id:number, @Body() supplier: CreateSupplierDto) : Promise<ReadSupplierDto>{
        const updatedSupplier = await this._supplierService.update(id, supplier);
        return updatedSupplier;
    }

    @Delete(':id')
    async deleteCategory(@Param('id') id:number){
        await this._supplierService.delete(id);
        return true;
    }
}
