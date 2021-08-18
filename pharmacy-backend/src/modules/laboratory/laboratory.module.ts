import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { LaboratoryService } from './laboratory.service';
import { LaboratoryController } from './laboratory.controller';

import { LaboratoryRepository } from './laboratory.repository';

@Module({
  imports: [TypeOrmModule.forFeature([LaboratoryRepository])],
  providers: [LaboratoryService],
  controllers: [LaboratoryController]
})
export class LaboratoryModule {}
