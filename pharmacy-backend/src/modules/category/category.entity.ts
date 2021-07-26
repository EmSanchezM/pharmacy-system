import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('categories')
export class Category extends BaseEntity { 
    
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column({ type: 'varchar', length: 100, nullable: false})
    name: string;

    @Column({ type: 'varchar', default: 'ACTIVE', length: 8 })
    status: string;

    @Column({ type: 'timestamp', name: 'created_at'})
    createdAt:  Date;

    @Column({ type: 'timestamp', name: 'updated_at'})
    updatedAt: Date; 
}


