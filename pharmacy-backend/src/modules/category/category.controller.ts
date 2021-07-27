import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CreateCategoryDto, ReadCategoryDto } from './dtos';

@Controller('category')
export class CategoryController {
    constructor(private readonly _categoryService: CategoryService){}

    @Get(':id')
    async findOneCategory(@Param() id:number): Promise<ReadCategoryDto>{
        const category = await this._categoryService.findOne(id);
        return category;
    }

    @Get()
    async findAllCategories(): Promise<ReadCategoryDto[]>{
        const categories = await this._categoryService.findAll();
        return categories;
    }

    @Post('create')
    async createCategory(@Body() category: CreateCategoryDto) : Promise<ReadCategoryDto>{
        const createdCategory = this._categoryService.create(category);
        return createdCategory;
    }

    @Put('update')
    async updateCategory(@Param() id:number, @Body() category: CreateCategoryDto) : Promise<ReadCategoryDto>{
        const updatedCategory = await this._categoryService.update(id, category);
        return updatedCategory;
    }

    @Delete('delete')
    async deleteCategory(@Param() id:number){
        await this._categoryService.delete(id);
        return true;
    }
}