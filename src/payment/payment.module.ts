import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { PaymentController } from "./controller/payment.controller";
import { PaymentRepository } from "./repository/payment.repository";
import { PaymentService } from "./service/payment.service";

@Module({
    imports:[TypeOrmModule.forFeature([PaymentRepository])],
    controllers:[PaymentController],
    providers:[PaymentService],
})
export class PaymentModule{}