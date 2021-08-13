import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { SupplierService } from './supplier.service';
import { SupplierController } from './supplier.controller';
import { SupplierRepository } from './supplier.reposity';

@Module({
  imports: [TypeOrmModule.forFeature([SupplierRepository])],
  providers: [SupplierService],
  controllers: [SupplierController],
})
export class SupplierModule {}
