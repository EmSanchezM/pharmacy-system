import { EntityRepository, Repository } from "typeorm";
import { Laboratory } from "../laboratory/laboratory.entity";

@EntityRepository(Laboratory)
export class LaboratoryRepository extends Repository<Laboratory>{}