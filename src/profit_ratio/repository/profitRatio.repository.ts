import { EntityRepository, Repository } from "typeorm";
import { ProfitRatioEntity } from "../entity/profitRatio.entity";

@EntityRepository(ProfitRatioEntity)
export class ProfitRatioRepository extends Repository<ProfitRatioEntity>{}