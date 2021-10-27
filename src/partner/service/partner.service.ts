import { Injectable } from '@nestjs/common';
import { async } from 'rxjs';
import { PaymentEntity } from 'src/payment/entity/payment.entity';
import { PartnerEntity } from '../entity/partner.entity';
import { PartnerRepository } from '../repository/partner.repository';

@Injectable()
export class PartnerService {
  constructor(private readonly partnerRepository: PartnerRepository) {}

  createPartner = async (partner: PartnerEntity) => {
    return await this.partnerRepository
      .createQueryBuilder()
      .insert()
      .into(PartnerEntity)
      .values(partner)
      .execute();
  };

  updatePartner = async (id: number, partner: PartnerEntity) => {
    return await this.partnerRepository
      .createQueryBuilder()
      .update(PartnerEntity)
      .set(partner)
      .where('id = :id', { id })
      .execute();
  };

  getPartnersList = async () => {
    return await this.partnerRepository.createQueryBuilder().getMany();
  };

  getPartner = async (id: number) => {
    return await this.partnerRepository
      .createQueryBuilder('partner')
      .where('partner.id = :id', { id })
      .getOne();
  };

  getProfitInPeriod = async (from: number, to: number) => {
    return await this.partnerRepository
      .createQueryBuilder()
      .select('partner.id', 'id')
      .addSelect('partner.name', 'name')
      .addSelect('ARRAY_AGG(payments.id)', 'payments_id')
      .addSelect('SUM(payments.amount * ratios.value)', 'sum')
      .from(PartnerEntity, 'partner')
      .leftJoin('partner.ratios', 'ratios')
      .leftJoin('ratios.source', 'source')
      .leftJoin('source.payments', 'payments')
      .where('payments.paymentDate >= :from', { from })
      .andWhere('payments.paymentDate <= :to', { to })
      .groupBy('partner.id')
      .getRawMany();
  };

  getPartnerProfitInPeriod = async (id: number, from: number, to: number) => {
    // relations instead joins, iso date instead timestamp
    return await this.partnerRepository
      .createQueryBuilder()
      .select('partner.id', 'id')
      .addSelect('partner.name', 'name')
      .addSelect('ARRAY_AGG(payments.id)', 'payments_id')
      .addSelect('SUM(payments.amount * ratios.value)', 'sum')
      .from(PartnerEntity, 'partner')
      .leftJoin('partner.ratios', 'ratios')
      .leftJoin('ratios.source', 'source')
      .leftJoin('source.payments', 'payments')
      .where('partner.id = :id', { id })
      .andWhere('payments.paymentDate >= :from', { from })
      .andWhere('payments.paymentDate <= :to', { to })
      .groupBy('partner.id')
      .getRawOne();
  };

  deletePartner = async (id: number) => {
    return await this.partnerRepository
      .createQueryBuilder()
      .delete()
      .from(PartnerEntity)
      .where('id = :id', { id })
      .execute();
  };
}
