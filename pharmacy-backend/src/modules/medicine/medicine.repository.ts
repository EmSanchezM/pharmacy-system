import { EntityRepository, Repository } from "typeorm";
import { Medicine } from "./medicine.entity";

@EntityRepository(Medicine)
export class MedicineRepository extends Repository<Medicine>{}