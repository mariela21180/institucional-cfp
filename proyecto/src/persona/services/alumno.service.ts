import { Injectable, HttpException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import Alumno from '../entities/alumno.entity';
import { PersonaService } from './persona.service';
import { AlumnoDto } from '../dto/alumno-dto';

@Injectable()
export class AlumnoService {
    public constructor(
        @InjectRepository(Alumno) 
        private readonly alumnoRepository: Repository<Alumno>,
        private readonly personaService: PersonaService
    ) {}

    async addAlumno(alumnoDto: AlumnoDto): Promise<Alumno[]> {
        const persona = await this.personaService.getPersona(alumnoDto.idPersona);
        if(!persona) {
            throw new HttpException('Persona does not exist!', 404);
        } 
        const alumno = new Alumno(alumnoDto['idAlumno'], alumnoDto['nivelEstudioAlcanzado'], alumnoDto['adeudaDocumentacion']);
        await this.alumnoRepository.save(alumno);
        return await this.alumnoRepository.find();
    }

    async getAlumnos(): Promise<Alumno[]> {
        return await this.alumnoRepository.find();
    }

    async getAlumno(alumnoId: number): Promise<Alumno> {
        const alumno = await this.alumnoRepository.findOne(alumnoId);

        if (!alumno) {
            throw new HttpException('Alumno inexistente', 404);
        }
        return alumno;
    }

    async deleteAlumno(alumnoId: number): Promise<Alumno[]> {
        await this.alumnoRepository.delete(alumnoId);
        return await this.alumnoRepository.find();
    }

    async updateAlumno(alumnoId: number, alumnoDto: AlumnoDto): Promise<Alumno[]> {
        const alumno = await this.alumnoRepository.findOne(alumnoId);

        if (!alumno) {
            throw new HttpException('Alumno inexistente', 404);
        }

        alumno.setNivelEstudioAlcanzado(alumnoDto.nivelEstudioAlcanzado);
        alumno.setAdeudaDocumentacion(alumnoDto.adeudaDocumentacion);

        await this.alumnoRepository.save(alumno);

        return await this.alumnoRepository.find();
    }

}
