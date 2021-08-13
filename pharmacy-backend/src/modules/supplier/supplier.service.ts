import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { plainToClass } from 'class-transformer';

import { CreateSupplierDto, ReadSupplierDto } from './dtos';

import { Supplier } from './supplier.entity';
import { SupplierRepository } from './supplier.reposity';

@Injectable()
export class SupplierService {
  constructor(
    @InjectRepository(SupplierRepository)
    private readonly _supplierReposity: SupplierRepository,
  ) {}

  async findAll(): Promise<ReadSupplierDto[]> {
    const suppliers = await this._supplierReposity.find({
      where: { status: 'ACTIVE' },
    });

    if (!suppliers) {
      throw new NotFoundException();
    }

    return suppliers.map((supplier) => plainToClass(ReadSupplierDto, supplier));
  }

  async findOne(supplierId: number): Promise<ReadSupplierDto> {
    if (!supplierId) {
      throw new BadRequestException('supplier id must be sent');
    }

    const supplier = await this._supplierReposity.findOne(supplierId, {
      where: { status: 'ACTIVE' },
    });

    if (!supplier) {
      throw new NotFoundException();
    }
    return plainToClass(ReadSupplierDto, supplier);
  }

  async create(supplier: CreateSupplierDto): Promise<ReadSupplierDto> {
    const createSupplier = await this._supplierReposity.save(supplier);

    return plainToClass(ReadSupplierDto, createSupplier);
  }

  async update(
    supplierId: number,
    supplier: CreateSupplierDto,
  ): Promise<ReadSupplierDto> {
    const updatedCategory = await this._supplierReposity.update(
      supplierId,
      supplier,
    );
    return plainToClass(ReadSupplierDto, updatedCategory);
  }

  async delete(supplierId: number): Promise<void> {
    const supplierExists = await this._supplierReposity.findOne(supplierId, {
      where: { status: 'ACTIVE' },
    });

    if (!supplierExists) {
      throw new NotFoundException();
    }

    await this._supplierReposity.update(supplierId, { status: 'INACTIVE' });
  }
}
