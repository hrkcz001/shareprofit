import { EntityRepository, Repository } from "typeorm";
import { SourceEntity } from "../entity/source.entity";

@EntityRepository(SourceEntity)
export class SourceRepository extends Repository<SourceEntity>{}