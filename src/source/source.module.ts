import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SourceController } from './controller/source.controller';
import { SourceRepository } from './repository/source.repository';
import { SourceService } from './service/source.service';

@Module({
  imports: [TypeOrmModule.forFeature([SourceRepository])],
  controllers: [SourceController],
  providers: [SourceService],
})
export class SourceModule {}
