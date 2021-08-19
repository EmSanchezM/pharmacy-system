import { EntityRepository, Repository } from "typeorm";
import { ShelfMedicine } from "./shelf-medicine.entity";

@EntityRepository(ShelfMedicine)
export class ShelfMedicineRepository extends Repository<ShelfMedicine>{}