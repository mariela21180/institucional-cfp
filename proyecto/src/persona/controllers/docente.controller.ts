import { Controller, Get, Post, Delete, Put, Param, Body } from '@nestjs/common';
import { DocenteService } from '../services/docente.service';

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

    @Post()
    async addDocente(@Body() docente: any) {
        return await this.docenteService.addDocente(docente);
    }

    @Delete(':docenteId')
    async deleteDocente(@Param('docenteId') docenteId: any) {
        return await this.docenteService.deleteDocente(parseInt(docenteId));
    }
    
    @Put(':docenteId')
    async updateDocente(@Param('docenteId') docenteId: any, @Body() docente: any) {
        return await this.docenteService.updateDocente(parseInt(docenteId), docente);
    }
}
