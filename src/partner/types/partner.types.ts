import { ProfitRatioInterface } from 'src/profit_ratio/types/profit_ratio.types';

export interface PartnerInterface {
  id: number;
  name: string;
  ratios?: ProfitRatioInterface[];
}
