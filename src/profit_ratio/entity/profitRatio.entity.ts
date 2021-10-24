import {
  IsDefined,
  IsEmpty,
  IsNumber,
  IsOptional,
  IsString,
  NotEquals,
} from 'class-validator';
import { PartnerEntity } from 'src/partner/entity/partner.entity';
import { SourceEntity } from 'src/source/entity/source.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { ProfitRatioInterface } from '../types/profit_ratio.types';

@Entity()
export class ProfitRatioEntity implements ProfitRatioInterface {
  @IsEmpty()
  @NotEquals(null)
  @PrimaryGeneratedColumn()
  id: number;

  @IsDefined()
  @ManyToOne((type) => PartnerEntity, (partner) => partner.ratios)
  partner: PartnerEntity;

  @IsDefined()
  @ManyToOne((type) => SourceEntity, (source) => source.ratios)
  source: SourceEntity;

  @IsDefined()
  @IsNumber()
  @Column('double precision')
  value: number;
}
