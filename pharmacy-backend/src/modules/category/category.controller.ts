import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ApiBody, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CategoryService } from './category.service';
import { CreateCategoryDto, ReadCategoryDto } from './dtos';

@Controller('category')
@ApiTags('Category')
export class CategoryController {
  constructor(private readonly _categoryService: CategoryService) {}

  @Get(':id')
  @ApiParam({
    type: Number,
    name: 'id',
    description: 'Category Id to get a category',
  })
  @ApiResponse({
    status: 200,
    description: 'Show a category related to a product or drug',
  })
  async findOneCategory(@Param() id: number): Promise<ReadCategoryDto> {
    const category = await this._categoryService.findOne(id);
    return category;
  }

  @Get()
  @ApiResponse({
    status: 200,
    description: 'Shows all categories related to a product or drug',
  })
  async findAllCategories(): Promise<ReadCategoryDto[]> {
    const categories = await this._categoryService.findAll();
    return categories;
  }

  @Post()
  @ApiBody({ type: [CreateCategoryDto] })
  @ApiResponse({
    status: 201,
    description: 'The record has been successfully created.',
  })
  async createCategory(
    @Body() category: CreateCategoryDto,
  ): Promise<ReadCategoryDto> {
    const createdCategory = this._categoryService.create(category);
    return createdCategory;
  }

  @Put(':id')
  @ApiParam({
    type: Number,
    name: 'id',
    description: 'Category Id to update a category',
  })
  @ApiResponse({
    status: 200,
    description: 'The record has been successfully updated.',
  })
  async updateCategory(
    @Param('id') id: number,
    @Body() category: CreateCategoryDto,
  ): Promise<ReadCategoryDto> {
    const updatedCategory = await this._categoryService.update(id, category);
    return updatedCategory;
  }

  @Delete(':id')
  @ApiParam({
    name: 'id',
    description: 'Category Id to delete a category',
  })
  @ApiResponse({
    status: 200,
    description: 'Removed the category',
  })
  async deleteCategory(@Param('id') id: number) {
    await this._categoryService.delete(id);
    return true;
  }
}
