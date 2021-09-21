import { Injectable } from "@nestjs/common";
import { PaymentEntity } from "../entity/payment.entity";
import { PaymentRepository } from "../repository/payment.repository";

@Injectable()
export class PaymentService{

    constructor(private readonly paymentRepository: PaymentRepository){}

    createPayment = async(payment: PaymentEntity) => {

        return await this.paymentRepository
                            .createQueryBuilder()
                            .insert()
                            .into(PaymentEntity)
                            .values(payment)
                            .execute();
    };

    updatePayment = async(id: number, payment: PaymentEntity) => {

        return await this.paymentRepository
                            .createQueryBuilder()
                            .update(PaymentEntity)
                            .set(payment)
                            .where("id = :id", {id})
                            .execute()

    };
    
    getPayments = async() => {
        
        return await this.paymentRepository
                            .createQueryBuilder("payment")
                            .leftJoinAndSelect("payment.source", "source")
                            .leftJoinAndSelect("payment.client", "client")
                            .getMany();
    };

    getPaymentsInPeriod = async(from: number, to: number) => {
        
        return await this.paymentRepository
                            .createQueryBuilder("payment")
                            .leftJoinAndSelect("payment.source", "source")
                            .leftJoinAndSelect("payment.client", "client")
                            .where("payment.paymentDate >= :from", {from})
                            .andWhere("payment.paymentDate <= :to", {to})
                            .getMany();
    };
    


    getPayment = async(id: number) => {

        return await this.paymentRepository
                            .createQueryBuilder("payment")
                            .leftJoinAndSelect("payment.source", "source")
                            .leftJoinAndSelect("payment.client", "client")
                            .where("payment.id = :id", {id})
                            .getOne();

    };

    getProfitInPeriod = async(from: number, to: number) => {

        return await this.paymentRepository
                            .createQueryBuilder("payment")
                            .leftJoinAndSelect("payment.source", "source")
                            .leftJoinAndSelect("source.ratios", "ratios")
                            .leftJoinAndSelect("ratios.partner", "partner")
                            .andWhere("payment.paymentDate >= :from", {from})
                            .andWhere("payment.paymentDate <= :to", {to})
                            .getMany()

    }

    getPartnerProfitInPeriod = async(id: number, from: number, to: number) => {

        return await this.paymentRepository
                            .createQueryBuilder("payment")
                            .leftJoinAndSelect("payment.source", "source")
                            .leftJoinAndSelect("source.ratios", "ratios")
                            .leftJoinAndSelect("ratios.partner", "partner")
                            .where("partner.id = :id", {id})
                            .andWhere("payment.paymentDate >= :from", {from})
                            .andWhere("payment.paymentDate <= :to", {to})
                            .getOne()

    }

    deletePayment = async(id: number) => {

        return await this.paymentRepository
                            .createQueryBuilder()
                            .delete()
                            .from(PaymentEntity)
                            .where("id = :id", {id})
                            .execute()

    };

}