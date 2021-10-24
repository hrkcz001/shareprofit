import { Injectable } from '@nestjs/common';
import { ClientEntity } from '../entity/client.entity';
import { ClientRepository } from '../repository/client.repository';
import { ClientInterface } from '../types/client.types';

// findMany, deleteOne instead query builder

@Injectable()
export class ClientService {
  constructor(private readonly clientRepository: ClientRepository) {}

  createClient = async (client: ClientEntity) => {
    return await this.clientRepository
      .createQueryBuilder()
      .insert()
      .into(ClientEntity)
      .values(client)
      .execute();
  };

  updateClient = async (id: number, client: Partial<ClientInterface>) => {
    return await this.clientRepository.update({ id }, client);
  };

  getClientsList = async () => {
    return await this.clientRepository.createQueryBuilder().getMany();
  };

  getClient = async (id: number) => {
    return await this.clientRepository
      // alias not needed
      .createQueryBuilder()
      .where('id = :id', { id })
      .getOne();
  };

  deleteClient = async (id: number) => {
    return await this.clientRepository
      .createQueryBuilder()
      .delete()
      .from(ClientEntity)
      .where('id = :id', { id })
      .execute();
  };
}
