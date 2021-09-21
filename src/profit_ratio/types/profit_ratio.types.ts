import { PartnerEntity } from "src/partner/entity/partner.entity";
import { SourceEntity } from "src/source/entity/source.entity";

export interface ProfitRatioInterface{
    id: number;
    partner: PartnerEntity;
    source: SourceEntity;
    value: number;
}