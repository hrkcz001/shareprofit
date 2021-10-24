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
import { PaymentEntity } from '../entity/payment.entity';
import { PaymentService } from '../service/payment.service';

@Controller()
export class PaymentController {
  constructor(private readonly paymentService: PaymentService) {}

  @Post('payment')
  async createPayment(@Body() payment: PaymentEntity) {
    return this.paymentService.createPayment(payment);
  }

  @Put('payment/:id')
  async updatePayment(
    @Param('id', ParseIntPipe) id: number,
    @Body() payment: PaymentEntity,
  ) {
    return this.paymentService.updatePayment(id, payment);
  }

  @Get('payment')
  async getPaymentsd() {
    return this.paymentService.getPayments();
  }

  @Get('payment/inperiod')
  async getPaymentsListInPeriod(
    @Query('from', ParseIntPipe) from: number,
    @Query('to', ParseIntPipe) to: number,
  ) {
    return this.paymentService.getPaymentsInPeriod(from, to);
  }

  @Get('payment/:id')
  async getPayment(@Param('id', ParseIntPipe) id: number) {
    return this.paymentService.getPayment(id);
  }

  @Delete('payment/:id')
  async deletePayment(@Param('id', ParseIntPipe) id: number) {
    return this.paymentService.deletePayment(id);
  }
}
