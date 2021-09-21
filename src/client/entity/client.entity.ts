import { Equals, IsArray, IsDefined, IsEmail, IsEmpty, IsNumber, IsOptional, IsString, NotEquals } from "class-validator";
import { PaymentEntity } from "src/payment/entity/payment.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { ClientInterface } from "../types/client.types";

@Entity()
export class ClientEntity implements ClientInterface{

    @IsEmpty()
    @NotEquals(null)
    @PrimaryGeneratedColumn()
    id: number;

    @IsOptional()
    @IsEmail()
    @Column()
    email: string;
    
    @IsDefined()
    @IsString()
    @Column()
    description: string;

    @IsOptional()
    @IsArray()
    @OneToMany(type => PaymentEntity, payment => payment.client)
    payments: PaymentEntity[];

}