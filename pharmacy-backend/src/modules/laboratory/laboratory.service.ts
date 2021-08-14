import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { plainToClass } from 'class-transformer';
import { CreateLaboratoryDto, ReadLaboratoryDto } from './dtos';
import { LaboratoryRepository } from './laboratory.repository';

@Injectable()
export class LaboratoryService {
    constructor(
        @InjectRepository(LaboratoryRepository)
        private readonly _laboratoryReposity: LaboratoryRepository,
    ) { }

    async findAll(): Promise<ReadLaboratoryDto[]> {
        const laboratories = await this._laboratoryReposity.find({
            where: { status: 'ACTIVE' },
        });

        if (!laboratories) {
            throw new NotFoundException();
        }

        return laboratories.map((laboratory) =>
            plainToClass(ReadLaboratoryDto, laboratory),
        );
    }

    async findOne(laboratoryId: number): Promise<ReadLaboratoryDto> {
        if (!laboratoryId) {
            throw new BadRequestException('laboratory id must be sent');
        }

        const laboratory = await this._laboratoryReposity.findOne(laboratoryId, {
            where: { status: 'ACTIVE' },
        });

        if (!laboratory) {
            throw new NotFoundException();
        }
        return plainToClass(ReadLaboratoryDto, laboratory);
    }

    async create(laboratory: CreateLaboratoryDto): Promise<ReadLaboratoryDto> {
        const createLaboratory = await this._laboratoryReposity.save(laboratory);

        return plainToClass(ReadLaboratoryDto, createLaboratory);
    }

    async update(
        laboratoryId: number,
        laboratory: CreateLaboratoryDto,
    ): Promise<ReadLaboratoryDto> {
        const foundCategory = await this._laboratoryReposity.findOne(laboratoryId);

        if (!foundCategory) {
            throw new NotFoundException('Category does not exists');
        }

        await this._laboratoryReposity.update(laboratoryId, laboratory);

        return plainToClass(ReadLaboratoryDto, foundCategory);
    }

    async delete(laboratoryId: number): Promise<void> {
        const laboratoryExists = await this._laboratoryReposity.findOne(laboratoryId, {
            where: { status: 'ACTIVE' },
        });

        if (!laboratoryExists) {
            throw new NotFoundException();
        }

        await this._laboratoryReposity.update(laboratoryId, { status: 'INACTIVE' });
    }
}
