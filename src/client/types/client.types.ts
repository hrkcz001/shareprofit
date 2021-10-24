import { PaymentInterface } from 'src/payment/types/payment.types';

export interface ClientInterface {
  id: number;
  email: string;
  description: string;
  payments: PaymentInterface[];
}
