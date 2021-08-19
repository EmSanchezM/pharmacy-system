import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Shelf } from "../branch-office/shelf.entity";
import { Medicine } from "./medicine.entity";

@Entity('shelf_medicine')
export class ShelfMedicine extends BaseEntity{
    @PrimaryGeneratedColumn('increment')
    id:number;

    @ManyToOne(type=>Medicine, (medicine)=> medicine.shelf)
    @JoinColumn({ name: 'medicine_id'})
    medicine: Medicine;

    @ManyToOne(type=>Shelf, (shelf)=>shelf.medicine)
    @JoinColumn({ name: 'shelf_id'})
    shelf: Shelf;

    @Column({ type: 'varchar', length: 255 })
    cubicle: string;
}