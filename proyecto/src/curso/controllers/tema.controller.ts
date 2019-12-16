import { Controller, Get, Param, Post, Body, Delete, Put } from '@nestjs/common';
import { TemaService } from '../services/tema.service';

@Controller('temas')
export class TemaController {
    public constructor(private temaService: TemaService) {}
    
    @Get()
    async getTemas() {
        return await this.temaService.getTemas();
    }

    @Get(':temaId')
    async getTema(@Param('temaId') temaId: any) {
        return await this.temaService.getTema(parseInt(temaId));
    }

    // @UseGuards(AuthGuard())
    @Post()
    async addTema(@Body() tema: any) {
        return await this.temaService.addTema(tema);
    }
    
    // @UseGuards(AuthGuard())
    @Delete(':temaId')
    async deleteTema(@Param('temaId') temaId: any) {
        return await this.temaService.deleteTema(parseInt(temaId));
    }
    
    // @UseGuards(AuthGuard())
    @Put(':temaId')
    async updateTema(@Param('temaId') temaId: any, @Body() tema: any) {
        return await this.temaService.updateTema(parseInt(temaId), tema);
    }
}
