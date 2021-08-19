import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Shelf } from "../branch-office/shelf.entity";
import { Laboratory } from "../laboratory/laboratory.entity";
import { Product } from "../product/product.entity";
import { ShelfMedicine } from "./shelf-medicine.entity";

@Entity('medicines')
export class Medicine extends BaseEntity {
    @PrimaryGeneratedColumn('increment')
    id:number;

    @Column({ type: 'varchar', length:255, nullable: false })
    indications: string;

    @Column({ type: 'varchar', length:255 })
    actions: string;

    @Column({ type:'varchar', length: 255 })
    dose:string;

    @Column({ type: 'varchar', length: 255 })
    administrationRoute: string;

    @OneToOne(type=> Product)
    @JoinColumn({name:'product_id'})
    product: Product;

    @ManyToOne(type=> Laboratory, (laboratory)=>laboratory.medicine)
    @JoinColumn({name: 'laboratory_id'})
    laboratory: Laboratory;

    @OneToMany(type=> ShelfMedicine, (shelfMedicine)=> shelfMedicine.medicine)
    shelf: ShelfMedicine;
    
    @Column({ type: 'varchar', default: 'ACTIVE', length: 8 })
    status: string;

    @Column({ type: 'timestamp', name: 'created_at', default: 'now()' })
    createdAt: Date;

    @Column({ type: 'timestamp', name: 'updated_at', default: 'now()' })
    updatedAt: Date;
}