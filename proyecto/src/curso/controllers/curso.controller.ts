import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { CursoService } from '../services/curso.service';

@Controller('cursos')
export class CursoController {
    public constructor(private cursoService: CursoService) {}
    
    @Get()
    async getCursos() {
        return await this.cursoService.getCursos();
    }

    @Get(':cursoId')
    async getCurso(@Param('cursoId') cursoId: any) {
        return await this.cursoService.getCurso(parseInt(cursoId));
    }

    // @UseGuards(AuthGuard())
    @Post()
    async addCurso(@Body() curso: any) {
        return await this.cursoService.addCurso(curso);
    }
    
    // @UseGuards(AuthGuard())
    @Delete(':cursoId')
    async deleteCurso(@Param('cursoId') cursoId: any) {
        return await this.cursoService.deleteCurso(parseInt(cursoId));
    }
    
    // @UseGuards(AuthGuard())
    @Put(':cursoId')
    async updateCurso(@Param('cursoId') cursoId: any, @Body() curso: any) {
        return await this.cursoService.updateCurso(parseInt(cursoId), curso);
    }

    // @UseGuards(AuthGuard())
    @Get('/horas/:cursoId')
    async getHorasDisctadasCurso(@Param('cursoId') cursoId: any) {
        return await this.cursoService.calcularHorasDictadas(parseInt(cursoId));
    }
}
