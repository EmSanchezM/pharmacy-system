import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CategoryRepository } from './category.repository';

import { plainToClass } from 'class-transformer';

import { CreateCategoryDto, ReadCategoryDto } from './dtos';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(CategoryRepository)
    private readonly _categoryReposity: CategoryRepository,
  ) {}

  async findAll(): Promise<ReadCategoryDto[]> {
    const categories = await this._categoryReposity.find({
      where: { status: 'ACTIVE' },
    });

    if (!categories) {
      throw new NotFoundException();
    }

    return categories.map((category) =>
      plainToClass(ReadCategoryDto, category),
    );
  }

  async findOne(categoryId: number): Promise<ReadCategoryDto> {
    if (!categoryId) {
      throw new BadRequestException('category id must be sent');
    }

    const category = await this._categoryReposity.findOne(categoryId, {
      where: { status: 'ACTIVE' },
    });

    if (!category) {
      throw new NotFoundException();
    }
    return plainToClass(ReadCategoryDto, category);
  }

  async create(category: CreateCategoryDto): Promise<ReadCategoryDto> {
    const createCategory = await this._categoryReposity.save(category);

    return plainToClass(ReadCategoryDto, createCategory);
  }

  async update(
    categoryId: number,
    category: CreateCategoryDto,
  ): Promise<ReadCategoryDto> {
    const foundCategory = await this._categoryReposity.findOne(categoryId, {
      //where: { status: 'ACTIVE' },
    });

    if (!foundCategory) {
      throw new NotFoundException('Category does not exists');
    }

    await this._categoryReposity.update(categoryId, category);

    return plainToClass(ReadCategoryDto, foundCategory);
  }

  async delete(categoryId: number): Promise<void> {
    const categoryExists = await this._categoryReposity.findOne(categoryId, {
      where: { status: 'ACTIVE' },
    });

    if (!categoryExists) {
      throw new NotFoundException();
    }

    await this._categoryReposity.update(categoryId, { status: 'INACTIVE' });
  }
}
