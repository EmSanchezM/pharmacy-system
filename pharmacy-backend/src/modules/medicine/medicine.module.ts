import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { MedicineService } from './medicine.service';
import { MedicineController } from './medicine.controller';
import { MedicineRepository } from './medicine.repository';
import { ProductModule } from '../product/product.module';
import { CategoryModule } from '../category/category.module';
import { SupplierModule } from '../supplier/supplier.module';
import { ProductRepository } from '../product/product.reposity';
import { LaboratoryRepository } from '../laboratory/laboratory.repository';
import { CategoryRepository } from '../category/category.repository';
import { SupplierRepository } from '../supplier/supplier.reposity';
import { ShelfRepository } from '../branch-office/shelf.repository';
import { ShelfMedicineRepository } from './shelf-medicine.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      MedicineRepository, 
      ProductRepository, 
      LaboratoryRepository,
      CategoryRepository,
      SupplierRepository,
      ShelfRepository,
      ShelfMedicineRepository,
    ]),
    ProductModule,
    CategoryModule,
    SupplierModule
  ],
  providers: [MedicineService],
  controllers: [MedicineController]
})
export class MedicineModule {}
