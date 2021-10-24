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
import { SourceEntity } from '../entity/source.entity';
import { SourceService } from '../service/source.service';

@Controller()
export class SourceController {
  constructor(private readonly sourceService: SourceService) {}

  @Post('source')
  async createSource(@Body() source: SourceEntity) {
    return this.sourceService.createSource(source);
  }

  @Put('source/:id')
  async updateSource(
    @Param('id', ParseIntPipe) id: number,
    @Body() source: SourceEntity,
  ) {
    return this.sourceService.updateSource(id, source);
  }

  @Get('source')
  async getSourcesd() {
    return this.sourceService.getSources();
  }

  @Get('source/:id')
  async getSource(@Param('id', ParseIntPipe) id: number) {
    return this.sourceService.getSource(id);
  }

  @Delete('source/:id')
  async deleteSource(@Param('id', ParseIntPipe) id: number) {
    return this.sourceService.deleteSource(id);
  }
}
