import { Injectable } from "@nestjs/common";
import { async } from "rxjs";
import { PartnerEntity } from "../entity/partner.entity";
import { PartnerRepository } from "../repository/partner.repository";

@Injectable()
export class PartnerService{

    constructor(private readonly partnerRepository: PartnerRepository){}

    createPartner = async(partner: PartnerEntity) => {

        return await this.partnerRepository
                            .createQueryBuilder()
                            .insert()
                            .into(PartnerEntity)
                            .values(partner)
                            .execute()

    };

    updatePartner = async(id: number, partner: PartnerEntity) => {

        return await this.partnerRepository
                            .createQueryBuilder()
                            .update(PartnerEntity)
                            .set(partner)
                            .where("id = :id", {id})
                            .execute()

    };
    
    getPartnersList = async() => {

        return await this.partnerRepository
                            .createQueryBuilder()
                            .getMany()

    };

    getPartner = async(id: number) => {

        return await this.partnerRepository
                            .createQueryBuilder("partner")
                            .where("partner.id = :id", {id})
                            .getOne()

    };

    deletePartner = async(id: number) => {

        return await this.partnerRepository
                            .createQueryBuilder()
                            .delete()
                            .from(PartnerEntity)
                            .where("id = :id", {id})
                            .execute()

    };

}