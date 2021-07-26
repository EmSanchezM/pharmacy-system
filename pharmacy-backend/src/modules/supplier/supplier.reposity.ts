import { EntityRepository, Repository } from "typeorm";
import { Supplier } from "./supplier.entity";

@EntityRepository(Supplier)
export class SupplierReposity extends Repository<Supplier>{}