import { PaymentInterface } from 'src/payment/types/payment.types';
import { ProfitRatioInterface } from 'src/profit_ratio/types/profit_ratio.types';

export interface SourceInterface {
  id: number;
  name: string;
  category?: string;
  ratios: ProfitRatioInterface[];
  payments: PaymentInterface[];
}
