import { BaseEntity, Column, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Category } from '../category/category.entity';
import { Product } from '../product/product.entity';

@Entity('suppliers')
export class Supplier extends BaseEntity { 
    
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column({ type: 'varchar', length: 255, nullable: false, name: 'company_name'})
    companyName: string;

    @Column({ type: 'varchar', length: 255, nullable: true, name:'phone_number' })
    phoneNumber: string;

    @Column({ type: 'varchar', length: 255, nullable: false})
    address: string;

    @Column({ type: 'varchar', length: 255, nullable: false})
    city: string;

    @Column({ type: 'varchar', length: 255, nullable: false})
    region: string;

    @Column({ type: 'varchar', length: 255, nullable: false, name:'postal_code'})
    postalCode: string;

    @Column({ type: 'varchar', length: 255, nullable: false, name: 'contact_name'})
    contactName: string;

    @OneToMany(type=> Product, product => product.supplier)
    products: Product[];

    @Column({ type: 'varchar', default: 'ACTIVE', length: 8 })
    status: string;

    @Column({ type: 'timestamp', name: 'created_at'})
    createdAt:  Date;

    @Column({ type: 'timestamp', name: 'updated_at'})
    updatedAt: Date; 
}


