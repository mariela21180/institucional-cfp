import { Injectable, HttpException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import Alumno from '../entities/alumno.entity';
import { PersonaService } from './persona.service';
import { AlumnoDto } from '../dto/alumno-dto';
import { ClaseService } from '../../curso/services/clase.service';
import { AsistenciaDto } from '../dto/asistencia-dto';
import { CursoService } from '../../curso/services/curso.service';

@Injectable()
export class AlumnoService {
    public constructor(
        @InjectRepository(Alumno) 
        private readonly alumnoRepository: Repository<Alumno>,
        private readonly personaService: PersonaService,
        private readonly claseService: ClaseService,
        private readonly cursoService: CursoService
    ) {}

    async addAlumno(alumnoDto: AlumnoDto): Promise<Alumno> {
        const persona = await this.personaService.getPersona(alumnoDto.idPersona);
        if(!persona) {
            throw new HttpException('Persona does not exist!', 404);
        } 
        const alumno = new Alumno(alumnoDto['idPersona'], alumnoDto['nivelEstudioAlcanzado'], alumnoDto['adeudaDocumentacion']);
        return await this.alumnoRepository.save(alumno);
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

    async updateAlumno(alumnoId: number, alumnoDto: AlumnoDto): Promise<Alumno> {
        const alumno = await this.alumnoRepository.findOne(alumnoId);

        if (!alumno) {
            throw new HttpException('Alumno inexistente', 404);
        }

        alumno.setNivelEstudioAlcanzado(alumnoDto.nivelEstudioAlcanzado);
        alumno.setAdeudaDocumentacion(alumnoDto.adeudaDocumentacion);

        return await this.alumnoRepository.save(alumno);
    }

    async getAsistenciasPorCurso(idAlumno: number, idCurso: number): Promise<AsistenciaDto> {
        let horasCursadas: number = 0;
        let cargaHorariaTotalCurso: number = 0;
        let curso = await this.cursoService.getCurso(idCurso);
        let asistenciaDTO = new AsistenciaDto();
        if (curso) {
            cargaHorariaTotalCurso = curso.getCargaHorariaTotal();
        } else {
            throw new HttpException('No se encontró el Curso', 404);
        }
        let hoy = new Date();
        let asistencia: number[] = await this.alumnoRepository.query('select a.idClase from asistencia a inner join clase cl on a.idClase = cl.idClase inner join curso cu on cl.idCurso = cu.idCurso where a.idAlumno = '+idAlumno+' and cu.idCurso = ' + idCurso); 
        if (asistencia) {
            for (let i = 0; i < asistencia.length; i++) {
                const idClase = asistencia[i];
                const clase = await this.claseService.getClase(idClase);
                if (clase && hoy > clase.getFin()) {
                    let inicio: number;
                    let fin: number;
                    let duracion: number;
                    let horas: number;
    
                    inicio = clase.getInicio().getTime();
                    fin = clase.getFin().getTime();
    
                    duracion = (fin - inicio);
    
                    horas = (duracion / (1000 * 60 * 60)) % 24;        
                    
                    horasCursadas += horas;
                }
            }
        } else {
            throw new HttpException('No se pudieron obtener las asistencias', 404);
        }

        asistenciaDTO.setHorasCursadas(horasCursadas);
        asistenciaDTO.setPorcentajeAsistencia(Math.round(((horasCursadas/cargaHorariaTotalCurso)*100)*100) /100); 
        return asistenciaDTO;
    }

}
