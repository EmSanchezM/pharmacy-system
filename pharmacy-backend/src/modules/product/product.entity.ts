import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Category } from '../category/category.entity';
import { Supplier } from '../supplier/supplier.entity';

@Entity('products')
export class Product extends BaseEntity { 
    
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column({ type: 'varchar', length: 200, nullable: false})
    name: string;

    @Column({ type: 'varchar', length: 255, nullable: true })
    description: string;

    @Column({ type: 'int', nullable: false, name: 'quantity_per_unit'})
    quantityPerUnit: number;

    @Column({ type: 'decimal', nullable:false, name: 'unit_price'})
    unitPrice: number;

    @Column({ type: 'int', nullable:false, name: 'units_in_stock'})
    unitsInStock: number;

    @Column({ type: 'date', nullable:true, name: 'expiration_date'})
    expirationDate: Date;

    @OneToOne(type=> Category, { cascade: true, nullable: false, eager: true})
    @JoinColumn()
    category: Category;

    @ManyToOne(type=> Supplier, supplier => supplier.products)
    supplier: Supplier;

    @Column({ type: 'varchar', default: 'ACTIVE', length: 8 })
    status: string;

    @Column({ type: 'timestamp', name: 'created_at'})
    createdAt:  Date;

    @Column({ type: 'timestamp', name: 'updated_at'})
    updatedAt: Date; 
}


