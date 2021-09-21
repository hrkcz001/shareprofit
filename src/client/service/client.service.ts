import { Injectable } from "@nestjs/common";
import { ClientEntity } from "../entity/client.entity";
import { ClientRepository } from "../repository/client.repository";

@Injectable()
export class ClientService{

    constructor(private readonly clientRepository: ClientRepository){}

    createClient = async(client: ClientEntity) => {

        return await this.clientRepository
                            .createQueryBuilder()
                            .insert()
                            .into(ClientEntity)
                            .values(client)
                            .execute()

    };

    updateClient = async(id: number, client: ClientEntity) => {

        return await this.clientRepository
                            .createQueryBuilder()
                            .update(ClientEntity)
                            .set(client)
                            .where("id = :id", {id})
                            .execute()

    };
    
    getClientsList = async() => {

        return await this.clientRepository
                            .createQueryBuilder()
                            .getMany()

    };

    getClient = async(id: number) => {

        return await this.clientRepository
                            .createQueryBuilder("client")
                            .where("client.id = :id", {id})
                            .getOne()

    };

    deleteClient = async(id: number) => {

        return await this.clientRepository
                            .createQueryBuilder()
                            .delete()
                            .from(ClientEntity)
                            .where("id = :id", {id})
                            .execute()

    };

}