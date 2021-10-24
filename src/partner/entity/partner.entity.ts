import {
  Equals,
  IsDefined,
  IsEmpty,
  IsNumber,
  IsOptional,
  IsString,
  NotEquals,
} from 'class-validator';
import { ProfitRatioEntity } from 'src/profit_ratio/entity/profitRatio.entity';
import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { PartnerInterface } from '../types/partner.types';

@Entity()
export class PartnerEntity implements PartnerInterface {
  @IsEmpty()
  @NotEquals(null)
  @PrimaryGeneratedColumn()
  id: number;

  @IsDefined()
  @IsString()
  @Column()
  name: string;

  @JoinColumn()
  @OneToMany(
    (type) => ProfitRatioEntity,
    (profit_ratio) => profit_ratio.partner,
  )
  ratios: ProfitRatioEntity[];
}
