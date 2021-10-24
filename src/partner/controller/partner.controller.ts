import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { PartnerEntity } from '../entity/partner.entity';
import { PartnerService } from '../service/partner.service';

@Controller()
export class PartnerController {
  constructor(private readonly partnerService: PartnerService) {}

  @Post('partner')
  async createPartner(@Body() partner: PartnerEntity) {
    return this.partnerService.createPartner(partner);
  }

  @Put('partner/:id')
  async updatePartner(
    @Param('id', ParseIntPipe) id: number,
    @Body() partner: PartnerEntity,
  ) {
    return this.partnerService.updatePartner(id, partner);
  }

  @Get('partner')
  async getPartnersList() {
    return this.partnerService.getPartnersList();
  }

  @Get('partner/:id')
  async getPartner(@Param('id', ParseIntPipe) id: number) {
    return this.partnerService.getPartner(id);
  }

  @Get('profit')
  async getProfitInPeriod(
    @Query('from', ParseIntPipe) from: number,
    @Query('to', ParseIntPipe) to: number,
  ) {
    return this.partnerService.getProfitInPeriod(from, to);
  }

  @Get('profit/:id')
  async getPartnerProfitInPeriod(
    @Param('id', ParseIntPipe) id: number,
    @Query('from', ParseIntPipe) from: number,
    @Query('to', ParseIntPipe) to: number,
  ) {
    return this.partnerService.getPartnerProfitInPeriod(id, from, to);
  }

  @Delete('partner/:id')
  async deletePartner(@Param('id', ParseIntPipe) id: number) {
    return this.partnerService.deletePartner(id);
  }
}
