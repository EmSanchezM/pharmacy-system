import { EntityRepository, Repository } from "typeorm";
import { Shelf } from "./shelf.entity";

@EntityRepository(Shelf)
export class ShelfRepository extends Repository<Shelf>{}