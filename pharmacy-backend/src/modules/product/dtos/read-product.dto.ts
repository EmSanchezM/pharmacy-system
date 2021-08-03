import { Exclude, Expose, Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';
import { ReadCategoryDto } from 'src/modules/category/dtos';
import { ReadSupplierDto } from 'src/modules/supplier/dtos';

@Exclude()
export class ReadProductDto { 
    @IsString()
    @Expose()
    @ApiProperty({ type: String, description: 'Name of the product'})
    readonly name: string;

    @IsString()
    @Expose()
    @ApiProperty({ type: String, description: 'Description of the product'})
    readonly description: string;

    @IsNumber()
    @Expose()
    @ApiProperty({ type: Number, description: 'Quantity per unit of the product'})
    readonly quantityPerUnit: number;

    @IsNumber()
    @Expose()
    @ApiProperty({ type: Number, description: 'Price per unit of the product'})
    readonly unitPrice: number;

    @IsNumber()
    @Expose()
    @ApiProperty({ type: Number, description: 'units in stock of the product'})
    readonly unitsInStock: number;

    @Expose()
    @ApiProperty({ type: Number, description: 'Category of the product'})
    @Type( type => ReadCategoryDto)
    readonly category: ReadCategoryDto;

    @Expose()
    @ApiProperty({ type: Number, description: 'Supplier of the product'})
    @Type( type=> ReadSupplierDto)
    readonly supplier: ReadSupplierDto; 
}