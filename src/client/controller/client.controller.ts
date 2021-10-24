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
import { ClientEntity } from '../entity/client.entity';
import { ClientService } from '../service/client.service';

// prefix in contrtoller instead each endpoint
@Controller()
export class ClientController {
  constructor(private readonly clientService: ClientService) {}

  @Post('client')
  async createClient(@Body() client: ClientEntity) {
    return this.clientService.createClient(client);
  }

  @Put('client/:id')
  async updateClient(
    @Param('id', ParseIntPipe) id: number,
    @Body() client: ClientEntity,
  ) {
    return this.clientService.updateClient(id, client);
  }

  @Get('client')
  async getClientsList() {
    return this.clientService.getClientsList();
  }

  @Get('client/:id')
  async getClient(@Param('id', ParseIntPipe) id: number) {
    return this.clientService.getClient(id);
  }

  @Delete('client/:id')
  async deleteClient(@Param('id', ParseIntPipe) id: number) {
    return this.clientService.deleteClient(id);
  }
}
