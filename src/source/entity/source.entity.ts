import { IsArray, IsDefined, IsEmpty, IsIdentityCard, IsNotEmpty, IsNumber, IsOptional, IsString, IsUUID, NotEquals } from "class-validator";
import { PaymentEntity } from "src/payment/entity/payment.entity";
import { ProfitRatioEntity } from "src/profit_ratio/entity/profitRatio.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { SourceInterface } from "../types/source.types";

@Entity()
export class SourceEntity implements SourceInterface{
    
    @IsEmpty()
    @NotEquals(null)
    @PrimaryGeneratedColumn()
    id: number;
    
    @IsDefined()
    @IsString()
    @Column()
    name: string;

    @IsOptional()
    @IsString()
    @Column()
    category?: string;

    @IsOptional()
    @IsArray()
    @OneToMany(type => ProfitRatioEntity, profit_ratio => profit_ratio.source)
    @JoinColumn()
    ratios: ProfitRatioEntity[];

    @IsOptional()
    @IsArray()
    @OneToMany(type => PaymentEntity, payment => payment.source)
    @JoinColumn()
    payments: PaymentEntity[];

}