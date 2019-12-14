import { Controller, Get, Post, Delete, Put, Param, Body, UseGuards } from '@nestjs/common';
import { DocenteService } from '../services/docente.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('docentes')
export class DocenteController {
    public constructor(private docenteService: DocenteService) {}

    @Get()
    async getDocentes() {
        return await this.docenteService.getDocentes();
    }

    @Get(':docenteId')
    async getDocente(@Param('docenteId') docenteId: any) {
        return await this.docenteService.getDocente(parseInt(docenteId));
    }

    // @UseGuards(AuthGuard())
    @Post()
    async addDocente(@Body() docente: any) {
        return await this.docenteService.addDocente(docente);
    }

    // @UseGuards(AuthGuard())
    @Delete(':docenteId')
    async deleteDocente(@Param('docenteId') docenteId: any) {
        return await this.docenteService.deleteDocente(parseInt(docenteId));
    }
    
    // @UseGuards(AuthGuard())
    @Put(':docenteId')
    async updateDocente(@Param('docenteId') docenteId: any, @Body() docente: any) {
        return await this.docenteService.updateDocente(parseInt(docenteId), docente);
    }
}
