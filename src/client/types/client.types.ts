import { PaymentEntity } from "src/payment/entity/payment.entity";

export interface ClientInterface{
    id: number;
    email: string;
    description: string;
    payments: PaymentEntity[];
}