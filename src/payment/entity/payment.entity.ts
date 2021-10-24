import {
  IsDefined,
  IsEmpty,
  IsJSON,
  IsNumber,
  IsOptional,
  IsString,
  NotEquals,
} from 'class-validator';
import { ClientEntity } from 'src/client/entity/client.entity';
import { SourceEntity } from 'src/source/entity/source.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { PaymentInterface } from '../types/payment.types';

@Entity()
export class PaymentEntity implements PaymentInterface {
  @IsEmpty()
  @NotEquals(null)
  @PrimaryGeneratedColumn()
  id: number;

  @IsDefined()
  @IsNumber()
  @Column()
  amount: number;

  @IsDefined()
  @JoinColumn()
  @ManyToOne((type) => SourceEntity, (source) => source.payments)
  source: SourceEntity;

  @IsOptional()
  @JoinColumn()
  @ManyToOne((type) => ClientEntity, (client) => client.payments)
  client?: ClientEntity;

  @IsOptional()
  @IsString()
  // @Column('text', { nullable: true })
  @Column()
  description?: string;

  @IsDefined()
  @IsNumber()
  @Column()
  paymentDate: number;
}
