import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { PaymentRepository } from "src/payment/repository/payment.repository";
import { PartnerController } from "./controller/partner.controller";
import { PartnerRepository } from "./repository/partner.repository";
import { PartnerService } from "./service/partner.service";

@Module({
    imports:[TypeOrmModule.forFeature([PartnerRepository])],
    controllers:[PartnerController],
    providers:[PartnerService],
})
export class PartnerModule{}