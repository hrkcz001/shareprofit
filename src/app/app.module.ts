import { Module, ValidationPipe } from '@nestjs/common';
import { AppController } from './controller/app.controller';
import { AppService } from './service/app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PaymentModule } from '../payment/payment.module';
import { APP_PIPE } from '@nestjs/core';
import { PartnerModule } from 'src/partner/partner.module';
import { ClientModule } from 'src/client/client.module';
import { SourceModule } from 'src/source/source.module';
import { ProfitRatioModule } from 'src/profit_ratio/profit_ratio.module';

@Module({
  imports: [TypeOrmModule.forRoot(), PaymentModule, PartnerModule, ClientModule, SourceModule, ProfitRatioModule],
  controllers: [AppController],
  providers: [AppService,
              {
                  provide: APP_PIPE,
                  useClass: ValidationPipe,
              },
             ],
})
export class AppModule {}
