import { Controller, Get, Param, Post, Body, Delete, Put, UseGuards } from '@nestjs/common';
import { TelefonoService } from '../services/telefono.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('telefonos')
export class TelefonoController {
    public constructor(private telefonoService: TelefonoService) {}
    
    @Get()
    async getTelefonos() {
        return await this.telefonoService.getTelefonos();
    }

    @Get(':telefonoId')
    async getTelefono(@Param('telefonoId') telefonoId: any) {
        return await this.telefonoService.getTelefono(parseInt(telefonoId));
    }

    // @UseGuards(AuthGuard())
    @Post()
    async addTelefono(@Body() telefono: any) {
        return await this.telefonoService.addTelefono(telefono);
    }
    
    // @UseGuards(AuthGuard())
    @Delete(':telefonoId')
    async deleteTelefono(@Param('telefonoId') telefonoId: any) {
        return await this.telefonoService.deleteTelefono(parseInt(telefonoId));
    }
    
    // @UseGuards(AuthGuard())
    @Put(':telefonoId')
    async updateTelefono(@Param('telefonoId') telefonoId: any, @Body() telefono: any) {
        return await this.telefonoService.updateTelefono(parseInt(telefonoId), telefono);
    }
}
