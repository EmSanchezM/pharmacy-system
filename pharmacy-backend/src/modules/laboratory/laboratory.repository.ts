import { Repository, EntityRepository } from 'typeorm';
import { Laboratory } from './laboratory.entity';

@EntityRepository(Laboratory)
export class LaboratoryRepository extends Repository<Laboratory> {}
