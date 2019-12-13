import { Controller, Get, Param, Post, Body, Put, Delete, UseGuards } from '@nestjs/common';
import { DomicilioService } from '../services/domicilio.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('domicilios')
export class DomicilioController {
    public constructor(private domicilioService: DomicilioService) { }

    @Get()
    async getDomicilios() {
        return await this.domicilioService.getDomicilios();
    }

    @Get(':domicilioId')
    async getDomicilio(@Param('domicilioId') domicilioId: any) {
        return await this.domicilioService.getDomicilio(parseInt(domicilioId));
    }

    @UseGuards(AuthGuard())
    @Post()
    async addDomicilio(@Body() domicilio: any) {
        return await this.domicilioService.addDomicilio(domicilio);
    }

    @UseGuards(AuthGuard())
    @Delete(':domicilioId')
    async deleteDomicilio(@Param('domicilioId') domicilioId: any) {
        return await this.domicilioService.deleteDomicilio(parseInt(domicilioId));
    }

    @UseGuards(AuthGuard())
    @Put(':domicilioId')
    async updateDomicilio(@Param('domicilioId') domicilioId: any, @Body() domicilio: any) {
        return await this.domicilioService.updateDomicilio(parseInt(domicilioId), domicilio);
    }

}
