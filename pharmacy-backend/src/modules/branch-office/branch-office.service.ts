import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { plainToClass } from 'class-transformer';
import { Connection } from 'typeorm';

import { BranchOffice } from './branch-office.entity';
import { Shelf } from './shelf.entity';
import { BranchOfficeRepository } from './branch-office.repository';

import { CreateBranchOfficeDto } from './dtos/create-branch-office.dto';
import { ReadBranchOfficeDto } from './dtos/read-branch-office.dto';
import { UpdateBranchOfficeDto } from './dtos/update-branch-office.dto';

@Injectable()
export class BranchOfficeService {
    constructor(
        @InjectRepository(BranchOfficeRepository)
        private readonly _branchOfficeRepository: BranchOfficeRepository,
        private connection: Connection,
    ){}

    async findAll(): Promise<ReadBranchOfficeDto[]>{
        const branchOffices: BranchOffice[] = await this._branchOfficeRepository.find({
            where: { status: 'ACTIVE' }
        })

        if(!branchOffices){
            throw new NotFoundException('Branch Offices does not exits')
        }

        return branchOffices.map((branchOffice)=> plainToClass(ReadBranchOfficeDto, branchOffice));
    }

    async findOne(branchOfficeId: number): Promise<ReadBranchOfficeDto>{
        if(!branchOfficeId){
            throw new BadRequestException('Branch Office Id must be sent');
        }

        const branchOffice: BranchOffice = await this._branchOfficeRepository.findOne(branchOfficeId, {
            where: { status: 'ACTIVE'}
        });

        if(!branchOffice){
            throw new NotFoundException('Branch Office does not exits')
        }
        return plainToClass(ReadBranchOfficeDto, branchOffice);
    }

    async create(branchOfficeBody: CreateBranchOfficeDto): Promise<ReadBranchOfficeDto>{
        const queryRunner = this.connection.createQueryRunner();

        try {
            await queryRunner.connect();
            await queryRunner.startTransaction();

            const branchOffice = new BranchOffice();
            branchOffice.name = branchOfficeBody.name;
            branchOffice.phoneNumber = branchOfficeBody.phoneNumber;
            branchOffice.address = branchOfficeBody.address;
            const newBranchOffice = await queryRunner.manager.save(branchOffice);

            for(let s of branchOfficeBody.shelfs){
                const shelf = new Shelf();
                shelf.name = s.name;
                shelf.branchOffice = newBranchOffice;

                await queryRunner.manager.save(shelf);
            }
            await queryRunner.commitTransaction();

            return plainToClass(ReadBranchOfficeDto, newBranchOffice);
        } catch (error) {
            await queryRunner.rollbackTransaction();
            throw new BadRequestException();
        } finally {
            await queryRunner.release();
        }
    }

    async update(
        branchOfficeId:number, 
        branchOffice: UpdateBranchOfficeDto
    ): Promise<ReadBranchOfficeDto>{
        const foundBranchOffice = await this._branchOfficeRepository.findOne(branchOfficeId);

        if(!foundBranchOffice){
            throw new NotFoundException('Branch office does not exits');
        }

        await this._branchOfficeRepository.update(branchOfficeId, branchOffice);

        const updatedBranchOffice = await this._branchOfficeRepository.findOne(branchOfficeId);

        return plainToClass(ReadBranchOfficeDto, updatedBranchOffice);
    }

    async delete(branchOfficeId: number): Promise<void>{
        const branchOfficeExist = await this._branchOfficeRepository.findOne(branchOfficeId, {
            where: { status: 'ACTIVE' }
        });

        if(!branchOfficeExist){
            throw new NotFoundException('Branch Office does not exits');
        }

        await this._branchOfficeRepository.update(branchOfficeId, {
            status: 'INACTIVE'
        });
    }
}
