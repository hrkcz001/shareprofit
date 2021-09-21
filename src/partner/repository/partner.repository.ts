import { EntityRepository, Repository } from "typeorm";
import { PartnerEntity } from "../entity/partner.entity";

@EntityRepository(PartnerEntity)
export class PartnerRepository extends Repository<PartnerEntity>{}