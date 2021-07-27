import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoryReposity } from './category.reposity';
import { CategoryService } from './category.service';
import { CategoryController } from './category.controller';

@Module({
    imports: [TypeOrmModule.forFeature([CategoryReposity])],
    providers: [CategoryService],
    controllers: [CategoryController]
})
export class CategoryModule {}
