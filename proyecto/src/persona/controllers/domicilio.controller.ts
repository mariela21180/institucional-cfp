import { Controller, Get, Param, Post, Body, Put, Delete } from '@nestjs/common';
import { DomicilioService } from '../services/domicilio.service';

@Controller('domicilios')
export class DomicilioController {
    public constructor(private domicilioService: DomicilioService) {}
    
    @Get()
    async getDomicilios() {
        return await this.domicilioService.getDomicilios();
    }

    @Get(':domicilioId')
    async getDomicilio(@Param('domicilioId') domicilioId: any) {
        return await this.domicilioService.getDomicilio(parseInt(domicilioId));
    }

    @Post()
    async addDomicilio(@Body() domicilio: any) {
        return await this.domicilioService.addDomicilio(domicilio);
    }

    @Put(':domicilioId')
    async updateDomicilio(@Param('domicilioId') domicilioId: any, @Body() domicilio: any) {
        return await this.domicilioService.updateDomicilio(parseInt(domicilioId), domicilio);
    }

    @Delete(':domicilioId')
    async deleteDomicilio(@Param('domicilioId') domicilioId: any) {
        return await this.domicilioService.deleteDomicilio(parseInt(domicilioId));
    }
    
}
