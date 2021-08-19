import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { plainToClass } from "class-transformer";

import { CreateShelfDto } from "./dtos/create-shelf.dto";
import { ReadShelfDto } from "./dtos/read-shelf.dto";

import { Shelf } from "./shelf.entity";
import { ShelfRepository } from "./shelf.repository";
import { BranchOffice } from './branch-office.entity'
import { BranchOfficeRepository } from "./branch-office.repository";
import { UpdateShelfDto } from "./dtos/update-shelf.dto";

@Injectable()
export class ShelfService {
    constructor(
        @InjectRepository(ShelfRepository)
        private readonly _shelfRepository: ShelfRepository,
        private readonly _branchOfficeRepository: BranchOfficeRepository
    ){}

    async findAll(): Promise<ReadShelfDto[]>{
        const shelfs: Shelf[] = await this._shelfRepository.find({
            relations: ['branchOffice'],
            where: { status: 'ACTIVE' }
        })

        if(!shelfs){
            throw new NotFoundException('Shelfs does not exits');
        }

        return shelfs.map((shelf)=> plainToClass(ReadShelfDto, shelf));
    }

    async findOne(shelfId: number): Promise<ReadShelfDto> {
        if(!shelfId){
            throw new BadRequestException('Shelf id must be sent');
        }

        const shelf: Shelf = await this._shelfRepository.findOne(shelfId, {
            where: { status: 'ACTIVE' }
        });

        if(!shelf){
            throw new NotFoundException('Shelf does not exits');
        }

        return plainToClass(ReadShelfDto, shelf);
    }

    async create(shelf: CreateShelfDto): Promise<ReadShelfDto>{
        const branchOfficeExits: BranchOffice = await this._branchOfficeRepository.findOne(shelf.branch_office_id);

        if(!branchOfficeExits){
            throw new NotFoundException('Branch office does not exits');
        }

        const createShelf = await this._shelfRepository.save(shelf);

        return plainToClass(ReadShelfDto, createShelf);
    }

    async update(
        shelfId: number,
        shelf: UpdateShelfDto
    ): Promise<ReadShelfDto>{
        const foundShelf = await this._shelfRepository.findOne(shelfId);

        if(!foundShelf){
            throw new NotFoundException('Shelf does not exist');
        }

        await this._shelfRepository.update(shelfId, shelf);

        const updatedShelf = await this._shelfRepository.findOne(shelfId);

        return plainToClass(ReadShelfDto, updatedShelf);
    }

    async delete(shelfId: number): Promise<void> {
        const shelfExist = await this._shelfRepository.findOne(shelfId,{
            where: { status: 'ACTIVE' }
        });

        if(!shelfExist){
            throw new NotFoundException('Shelf does not exist');
        }
        await this._shelfRepository.update(shelfId, {
            status: 'INACTIVE'
        });
        
    }

}