import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Shelf } from './shelf.entity';

@Entity('branch-offices')
export class BranchOffice extends BaseEntity {
    @PrimaryGeneratedColumn('increment')
    id:number;

    @Column({ type: 'varchar', length: 255, nullable: false })
    name: string;
    
    @Column({ type: 'varchar', length:150 })
    phoneNumber: string;

    @Column({ type: 'varchar', length:255 })
    address: string;

    @OneToMany(type=>Shelf, shelf=>shelf.branchOffice)
    shelfs: Shelf[];

    @Column({ type: 'varchar', default: 'ACTIVE', length: 8 })
    status: string;
  
    @Column({ type: 'timestamp', name: 'created_at', default: 'now()' })
    createdAt: Date;
  
    @Column({ type: 'timestamp', name: 'updated_at', default: 'now()' })
    updatedAt: Date;
}