import { PaymentEntity } from "src/payment/entity/payment.entity";
import { ProfitRatioEntity } from "src/profit_ratio/entity/profitRatio.entity";

export interface SourceInterface{
    id: number;
    name: string;
    category?: string;
    ratios: ProfitRatioEntity[];
    payments: PaymentEntity[];
}