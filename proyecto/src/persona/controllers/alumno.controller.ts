import { Controller, Get, Param, Post, Body, Delete, Put, UseGuards } from '@nestjs/common';
import { AlumnoService } from '../services/alumno.service';
import { AuthGuard } from '@nestjs/passport';

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

    // @UseGuards(AuthGuard())
    @Post() // si se pone un id ya existente: SOBREESCRIBE!!! ---> VER proximamente!!!
    async addAlumno(@Body() alumno: any) {
        return await this.alumnoService.addAlumno(alumno);
    }

    // @UseGuards(AuthGuard())
    @Delete(':alumnoId')
    async deleteAlumno(@Param('alumnoId') alumnoId: any) {
        return await this.alumnoService.deleteAlumno(parseInt(alumnoId));
    }

    // @UseGuards(AuthGuard())   
    @Put(':alumnoId')
    async updateAlumno(@Param('alumnoId') alumnoId: any, @Body() alumno: any) {
        return await this.alumnoService.updateAlumno(parseInt(alumnoId), alumno);
    }
}
