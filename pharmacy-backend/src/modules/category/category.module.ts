import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoryReposity } from './category.reposity';

@Module({
    imports: [TypeOrmModule.forFeature([CategoryReposity])]
})
export class CategoryModule {}
