import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { BranchOfficeController } from './branch-office.controller';
import { BranchOfficeService } from './branch-office.service';
import { BranchOfficeRepository } from './branch-office.repository';

import { ShelfRepository } from './shelf.repository';
import { ShelfService } from './shelf.service';
import { ShelfController } from './shelf.controller';

@Module({
  imports: [TypeOrmModule.forFeature([BranchOfficeRepository, ShelfRepository])],
  controllers: [BranchOfficeController, ShelfController],
  providers: [BranchOfficeService, ShelfService]
})
export class BranchOfficeModule {}
