import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

import { ShelfMedicine } from "../medicine/shelf-medicine.entity";
import { BranchOffice } from "./branch-office.entity";

@Entity('shelfs')
export class Shelf extends BaseEntity {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column({ type: 'varchar', length: 255 })
    name: string;

    @ManyToOne(type=> BranchOffice, branchOffice=>branchOffice.shelfs)
    @JoinColumn({ name: 'branch_office_id'})
    branchOffice: BranchOffice;

    @OneToMany(type=>ShelfMedicine, (shelfMedicine)=>shelfMedicine.shelf)
    medicine: ShelfMedicine;

    @Column({ type: 'varchar', default: 'ACTIVE', length: 8 })
    status: string;
  
    @Column({ type: 'timestamp', name: 'created_at', default: 'now()' })
    createdAt: Date;
  
    @Column({ type: 'timestamp', name: 'updated_at', default: 'now()' })
    updatedAt: Date;

}