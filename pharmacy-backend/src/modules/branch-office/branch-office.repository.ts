import { EntityRepository, Repository } from "typeorm";
import { BranchOffice } from "./branch-office.entity";

@EntityRepository(BranchOffice)
export class BranchOfficeRepository extends Repository<BranchOffice>{}