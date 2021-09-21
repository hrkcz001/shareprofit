import { Injectable } from "@nestjs/common";
import { SourceEntity } from "../entity/source.entity";
import { SourceRepository } from "../repository/source.repository";

@Injectable()
export class SourceService{

    constructor(private readonly sourceRepository: SourceRepository){}

    createSource = async(source: SourceEntity) => {

        return await this.sourceRepository
                            .createQueryBuilder()
                            .insert()
                            .into(SourceEntity)
                            .values(source)
                            .execute();
    };

    updateSource = async(id: number, source: SourceEntity) => {

        return await this.sourceRepository
                            .createQueryBuilder()
                            .update(SourceEntity)
                            .set(source)
                            .where("id = :id", {id})
                            .execute()

    };
    
    getSources = async() => {
        
        return await this.sourceRepository
                            .createQueryBuilder("source")
                            .leftJoinAndSelect("source.ratios", "ratios")
                            .leftJoinAndSelect("ratios.partner", "partner")
                            .leftJoinAndSelect("source.payments", "payments")
                            .leftJoinAndSelect("payments.client", "client")
                            .getMany();
    };

    getSource = async(id: number) => {

        return await this.sourceRepository
                            .createQueryBuilder("source")
                            .leftJoinAndSelect("source.ratios", "ratios")
                            .leftJoinAndSelect("ratios.partner", "partner")
                            .leftJoinAndSelect("source.payments", "payments")
                            .leftJoinAndSelect("payments.client", "client")
                            .where("source.id = :id", {id})
                            .getOne();

    };

    deleteSource = async(id: number) => {

        return await this.sourceRepository
                            .createQueryBuilder()
                            .delete()
                            .from(SourceEntity)
                            .where("id = :id", {id})
                            .execute()

    };

}