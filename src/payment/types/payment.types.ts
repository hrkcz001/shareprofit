import { ClientEntity } from 'src/client/entity/client.entity';
import { SourceEntity } from 'src/source/entity/source.entity';

export interface PaymentInterface {
  id?: number;
  amount: number;
  source: SourceEntity;
  client?: ClientEntity;
  description?: string;
  paymentDate: number;
}
