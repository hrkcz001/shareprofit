import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ProfitRatioController } from "./controller/profitRatio.controller";
import { ProfitRatioRepository } from "./repository/profitRatio.repository";
import { ProfitRatioService } from "./service/profitRatio.service";

@Module({
    imports:[TypeOrmModule.forFeature([ProfitRatioRepository])],
    controllers:[ProfitRatioController],
    providers:[ProfitRatioService],
})
export class ProfitRatioModule{}