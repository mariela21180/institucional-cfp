import { Controller, Get, Param, Post, Body, Delete, Put } from '@nestjs/common';
import { HorarioService } from '../services/horario.service';

@Controller('horarios')
export class HorarioController {
    public constructor(private horarioService: HorarioService) {}
    
    @Get()
    async getHorarios() {
        return await this.horarioService.getHorarios();
    }

    @Get(':horarioId')
    async getHorario(@Param('horarioId') horarioId: any) {
        return await this.horarioService.getHorario(parseInt(horarioId));
    }

    // @UseGuards(AuthGuard())
    @Post()
    async addHorario(@Body() horario: any) {
        return await this.horarioService.addHorario(horario);
    }
    
    // @UseGuards(AuthGuard())
    @Delete(':horarioId')
    async deleteHorario(@Param('horarioId') horarioId: any) {
        return await this.horarioService.deleteHorario(parseInt(horarioId));
    }
    
    // @UseGuards(AuthGuard())
    @Put(':horarioId')
    async updateHorario(@Param('horarioId') horarioId: any, @Body() horario: any) {
        return await this.horarioService.updateHorario(parseInt(horarioId), horario);
    }

}
