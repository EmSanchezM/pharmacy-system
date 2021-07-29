import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiBody, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';

import { SupplierService } from './supplier.service';
import { CreateSupplierDto, ReadSupplierDto } from './dtos';

@Controller('supplier')
@ApiTags('Supplier')
export class SupplierController {
    constructor(private readonly _supplierService: SupplierService){}

    @Get(':id')
    @ApiParam({
        type: Number,
        name: 'id',
        description: 'Supplier Id to get a supplier company'
    })
    @ApiResponse({
        status: 200,
        description: 'Show a the supplier company'
    })
    async findOneSupplier(@Param('id') id:number): Promise<ReadSupplierDto>{
        const supplier = await this._supplierService.findOne(id);
        return supplier;
    }

    @Get()
    @ApiResponse({
        status: 200,
        description: 'Shows all supplier company'
    })
    async findAllSuppliers(): Promise<ReadSupplierDto[]>{
        const suppliers = await this._supplierService.findAll();
        return suppliers;
    }

    @Post()
    @ApiBody({ type: [CreateSupplierDto] })
    @ApiResponse({
        status: 201,
        description: 'The record has been successfully created.'
    })
    async createSupplier(@Body() supplier: CreateSupplierDto) : Promise<ReadSupplierDto>{
        const createdSupplier = this._supplierService.create(supplier);
        return createdSupplier;
    }

    @Put(':id')
    @ApiParam({
        type: Number,
        name: 'id',
        description: 'Supplier Id to update a supplier company'
    })
    @ApiResponse({
        status: 200,
        description: 'The record has been successfully updated.'
    })
    async updateCategory(@Param('id') id:number, @Body() supplier: CreateSupplierDto) : Promise<ReadSupplierDto>{
        const updatedSupplier = await this._supplierService.update(id, supplier);
        return updatedSupplier;
    }

    @Delete(':id')
    @ApiParam({
        name: 'id',
        description: 'Supplier Id to delete a supplier company'
    })
    @ApiResponse({
        status: 200,
        description: 'Removed the supplier company'
    })
    async deleteCategory(@Param('id') id:number){
        await this._supplierService.delete(id);
        return true;
    }
}
