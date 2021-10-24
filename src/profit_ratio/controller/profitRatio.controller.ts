import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { ProfitRatioEntity } from '../entity/profitRatio.entity';
import { ProfitRatioService } from '../service/profitRatio.service';

@Controller()
export class ProfitRatioController {
  constructor(private readonly profitRatioService: ProfitRatioService) {}

  @Post('profitRatio')
  async createProfitRatio(@Body() profitRatio: ProfitRatioEntity) {
    return this.profitRatioService.createProfitRatio(profitRatio);
  }

  @Put('profitRatio/:id')
  async updateProfitRatio(
    @Param('id', ParseIntPipe) id: number,
    @Body() profitRatio: ProfitRatioEntity,
  ) {
    return this.profitRatioService.updateProfitRatio(id, profitRatio);
  }

  @Get('profitRatio')
  async getProfitRatiosList() {
    return this.profitRatioService.getProfitRatiosList();
  }

  @Get('profitRatio/:id')
  async getProfitRatio(@Param('id', ParseIntPipe) id: number) {
    return this.profitRatioService.getProfitRatio(id);
  }

  @Delete('profitRatio/:id')
  async deleteProfitRatio(@Param('id', ParseIntPipe) id: number) {
    return this.profitRatioService.deleteProfitRatio(id);
  }
}
