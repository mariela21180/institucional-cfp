import { Controller, Get, Param, Post, Body, Delete, Put } from '@nestjs/common';
import { AlumnoService } from '../services/alumno.service';

@Controller('alumnos')
export class AlumnoController {
    public constructor(private alumnoService: AlumnoService) {}

    @Get()
    async getAlumnos() {
        return await this.alumnoService.getAlumnos();
    }

    @Get(':alumnoId')
    async getAlumno(@Param('alumnoId') alumnoId: any) {
        return await this.alumnoService.getAlumno(parseInt(alumnoId));
    }

    @Post() // si se pone un id ya existente: SOBREESCRIBE!!! ---> VER proximamente!!!
    async addAlumno(@Body() alumno: any) {
        return await this.alumnoService.addAlumno(alumno);
    }

    @Delete(':alumnoId')
    async deleteAlumno(@Param('alumnoId') alumnoId: any) {
        return await this.alumnoService.deleteAlumno(parseInt(alumnoId));
    }
    
    @Put(':alumnoId')
    async updateAlumno(@Param('alumnoId') alumnoId: any, @Body() alumno: any) {
        return await this.alumnoService.updateAlumno(parseInt(alumnoId), alumno);
    }
}
