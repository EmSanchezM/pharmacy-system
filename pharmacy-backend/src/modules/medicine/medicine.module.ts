import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { MedicineService } from './medicine.service';
import { MedicineController } from './medicine.controller';
import { Medicine } from './medicine.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Medicine])],
  providers: [MedicineService],
  controllers: [MedicineController]
})
export class MedicineModule {}
