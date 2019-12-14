import { Controller, Get, Param, Post, Body, Delete, Put } from '@nestjs/common';
import { ClaseService } from '../services/clase.service';

@Controller('clases')
export class ClaseController {
    public constructor(private claseService: ClaseService) {}
    
    @Get()
    async getClases() {
        return await this.claseService.getClases();
    }

    @Get(':claseId')
    async getClase(@Param('claseId') claseId: any) {
        return await this.claseService.getClase(parseInt(claseId));
    }

    // @UseGuards(AuthGuard())
    @Post()
    async addClase(@Body() clase: any) {
        return await this.claseService.addClase(clase);
    }
    
    // @UseGuards(AuthGuard())
    @Delete(':claseId')
    async deleteClase(@Param('claseId') claseId: any) {
        return await this.claseService.deleteClase(parseInt(claseId));
    }
    
    // @UseGuards(AuthGuard())
    @Put(':claseId')
    async updateClase(@Param('claseId') claseId: any, @Body() clase: any) {
        return await this.claseService.updateClase(parseInt(claseId), clase);
    }
}
