import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from "@nestjs/common";
import { PartnerEntity } from "../entity/partner.entity";
import { PartnerService } from "../service/partner.service";

@Controller()
export class PartnerController{

    constructor(private readonly partnerService: PartnerService){}

    @Post("partner")
    async createPartner(@Body() partner: PartnerEntity){
        return this.partnerService.createPartner(partner);
    }

    @Put("partner/:id")
    async updatePartner(@Param("id", ParseIntPipe) id: number, @Body() partner: PartnerEntity){
        return this.partnerService.updatePartner(id, partner);
    }

    @Get("partner")
    async getPartnersList(){
        return this.partnerService.getPartnersList();
    }

    @Get("partner/:id")
    async getPartner(@Param("id", ParseIntPipe) id: number){
        return this.partnerService.getPartner(id);
    }

    @Delete("partner/:id")
    async deletePartner(@Param("id", ParseIntPipe) id: number){
        return this.partnerService.deletePartner(id);
    }

}