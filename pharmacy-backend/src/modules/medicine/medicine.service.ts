import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MedicineRepository } from './medicine.repository';

@Injectable()
export class MedicineService {
    constructor(
        @InjectRepository(MedicineRepository)
        private readonly _medicineRepository: MedicineRepository
    ){}

    async findAll(){

    }
}
