import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiBody, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateProductDto } from './dtos/create-product.dto';
import { ReadProductDto } from './dtos/read-product.dto';
import { ProductService } from './product.service';

@Controller('product')
@ApiTags('Product')
export class ProductController {

    constructor(private readonly _productService: ProductService){}

    @Get(':id')
    @ApiParam({
        type: Number,
        name: 'id',
        description: 'Product Id to get a product'
    })
    @ApiResponse({
        status: 200,
        description: 'Show a product'
    })
    async findOneProduct(@Param() id:number): Promise<ReadProductDto>{
        const product = await this._productService.findOne(id);
        return product;
    }

    @Get()
    @ApiResponse({
        status: 200,
        description: 'Shows all products'
    })
    async findAllProducts(): Promise<ReadProductDto[]>{
        const products = await this._productService.findAll();
        return products;
    }

    @Post()
    @ApiBody({ type: [CreateProductDto] })
    @ApiResponse({
        status: 201,
        description: 'The record has been successfully created.'
    })
    async createProduct(@Body() product: CreateProductDto) : Promise<ReadProductDto>{
        const createdProduct = this._productService.create(product);
        return createdProduct;
    }

    @Put(':id')
    @ApiParam({
        type: Number,
        name: 'id',
        description: 'Product Id to update a product'
    })
    @ApiResponse({
        status: 200,
        description: 'The record has been successfully updated.'
    })
    async updateProduct(@Param('id') id:number, @Body() product: CreateProductDto) : Promise<ReadProductDto>{
        const updatedProduct = await this._productService.update(id, product);
        return updatedProduct;
    }

    @Delete(':id')
    @ApiParam({
        name: 'id',
        description: 'Product Id to delete a product'
    })
    @ApiResponse({
        status: 200,
        description: 'Removed the product'
    })
    async deleteProduct(@Param('id') id:number){
        await this._productService.delete(id);
        return true;
    }

}
