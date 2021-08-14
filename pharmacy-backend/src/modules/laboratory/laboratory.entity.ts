import {BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn} from 'typeorm';
import { Medicine } from '../medicine/medicine.entity';

@Entity('laboratories')
export class Laboratory extends BaseEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ type: 'varchar', length: 255, nullable: false })
  name: string;

  @Column({ type: 'varchar', length: 255 })
  direction: string;

  @Column({ type: 'varchar', length: 100 })
  phoneNumber: string;

  @OneToMany(type=>Medicine, (medicine)=>medicine.laboratory)
  medicine: Medicine[];

  @Column({ type: 'varchar', default: 'ACTIVE', length: 8 })
  status: string;

  @Column({ type: 'timestamp', name: 'created_at', default: 'now()' })
  createdAt: Date;

  @Column({ type: 'timestamp', name: 'updated_at', default: 'now()' })
  updatedAt: Date;
}
