import { Module } from '@nestjs/common';
import { LaboratoryService } from './laboratory.service';
import { LaboratoryController } from './laboratory.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Laboratory } from './laboratory.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Laboratory])],
  providers: [LaboratoryService],
  controllers: [LaboratoryController]
})
export class LaboratoryModule {}
