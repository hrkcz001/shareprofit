import { Injectable } from '@nestjs/common';
import { ProfitRatioEntity } from '../entity/profitRatio.entity';
import { ProfitRatioRepository } from '../repository/profitRatio.repository';

@Injectable()
export class ProfitRatioService {
  constructor(private readonly profitRatioRepository: ProfitRatioRepository) {}

  createProfitRatio = async (profitRatio: ProfitRatioEntity) => {
    console.log('test');
    return await this.profitRatioRepository
      .createQueryBuilder()
      .insert()
      .into(ProfitRatioEntity)
      .values(profitRatio)
      .execute();
  };

  updateProfitRatio = async (id: number, profitRatio: ProfitRatioEntity) => {
    return await this.profitRatioRepository
      .createQueryBuilder()
      .update(ProfitRatioEntity)
      .set(profitRatio)
      .where('id = :id', { id })
      .execute();
  };

  getProfitRatiosList = async () => {
    return await this.profitRatioRepository
      .createQueryBuilder('profit_ratio')
      .leftJoinAndSelect('profit_ratio.partner', 'partner')
      .leftJoinAndSelect('profit_ratio.source', 'source')
      .getMany();
  };

  getProfitRatio = async (id: number) => {
    return await this.profitRatioRepository
      .createQueryBuilder('profit_ratio')
      .leftJoinAndSelect('profit_ratio.partner', 'partner')
      .leftJoinAndSelect('profit_ratio.source', 'source')
      .where('profit_ratio.id = :id', { id })
      .getOne();
  };

  deleteProfitRatio = async (id: number) => {
    return await this.profitRatioRepository
      .createQueryBuilder()
      .delete()
      .from(ProfitRatioEntity)
      .where('id = :id', { id })
      .execute();
  };
}
