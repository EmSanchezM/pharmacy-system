import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoryReposity } from './category.reposity';
import { CategoryService } from './category.service';

@Module({
    imports: [TypeOrmModule.forFeature([CategoryReposity])],
    providers: [CategoryService]
})
export class CategoryModule {}
