import { Injectable, HttpException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import Alumno from '../entities/alumno.entity';
import { PersonaService } from './persona.service';
import { AlumnoDto } from '../dto/alumno-dto';
import { ClaseService } from '../../curso/services/clase.service';
import { AsistenciaDto } from '../dto/asistencia-dto';
import { CursoService } from '../../curso/services/curso.service';
import { AlumnoFullDto } from '../dto/alumnofull-dto';
import Persona from '../entities/persona.entity';
import { DomicilioService } from './domicilio.service';
import { TelefonoService } from './telefono.service';
import Domicilio from '../entities/domicilio.entity';
import Telefono from '../entities/telefono.entity';
import { DomicilioDto } from '../dto/domicilio-dto';
import { PersonaDto } from '../dto/persona-dto';
import { TelefonoDto } from '../dto/telefono-dto';
import { CursosAlumnoDto } from '../dto/cursosalumno-dto';

@Injectable()
export class AlumnoService {
    public constructor(
        @InjectRepository(Alumno) 
        private readonly alumnoRepository: Repository<Alumno>,
        private readonly personaService: PersonaService,
        private readonly claseService: ClaseService,
        private readonly cursoService: CursoService,
        private readonly domicilioService: DomicilioService, 
        private readonly telefonoService: TelefonoService
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

    async guardarAlumnoFull(alumnoFull: AlumnoFullDto, idAlumno?: number): Promise<string> {
        let resultado: string;
        let personaDTO: PersonaDto;
        let persona: Persona;
        let domicilioDTO: DomicilioDto;
        let domicilio: Domicilio;
        let telefonoDTO: TelefonoDto;
        let telefono: Telefono;
        let alumnoDTO: AlumnoDto;
        let alumno: Alumno;
        let curso: CursosAlumnoDto;
        let cursoGuardado: any[];

        if (!idAlumno) {
            personaDTO = {
                nombre: alumnoFull.nombre,
                apellido: alumnoFull.apellido,
                dni: alumnoFull.dni,
                eMail: alumnoFull.eMail
            };
            persona = await this.personaService.addPersona(personaDTO);
            if (!persona) {
                return resultado = 'No se pudo crear la Persona';
            }
            domicilioDTO = {
                calle: alumnoFull.calle,
                altura: alumnoFull.altura,
                piso: alumnoFull.piso,
                dpto: alumnoFull.dpto,
                idPersona: persona.getIdPersona()
            }
            domicilio = await this.domicilioService.addDomicilio(domicilioDTO);
            if (!domicilio) {
                return resultado = 'No se pudo crear el Domicilio';
            }
            telefonoDTO = {
                codArea: alumnoFull.codArea,
                nro: alumnoFull.nro,
                idPersona: persona.getIdPersona()
            }

            telefono = await this.telefonoService.addTelefono(telefonoDTO);
            if (!telefono) {
                return resultado = 'No se pudo crear el Telefono';
            }
            alumnoDTO = {
                nivelEstudioAlcanzado: alumnoFull.nivelEstudioAlcanzado,
                adeudaDocumentacion: alumnoFull.adeudaDocumentacion,
                idPersona: persona.getIdPersona()
            };
            alumno = await this.addAlumno(alumnoDTO)
            if (!alumno) {
                return resultado = 'No se pudo crear el Alumno';
            } else {
                for (let i = 0; i < alumnoFull.cursos.length; i++) {
                    curso = alumnoFull.cursos[i];
                    cursoGuardado = await this.alumnoRepository.query('insert into alumno_curso(idAlumno, idCurso) values(' + alumno.getIdAlumno() + ',' + curso.idCurso + ')');                
                    if (!cursoGuardado) {
                        return resultado = 'No se pudo guardar el Curso';
                    }
                }
            }


            resultado = "ok";
        }
         else {
            personaDTO = {
                nombre: alumnoFull.nombre,
                apellido: alumnoFull.apellido,
                dni: alumnoFull.dni,
                eMail: alumnoFull.eMail
            };
            persona = await this.personaService.updatePersona(idAlumno, personaDTO);
            if (!persona) {
                return resultado = 'No se pudo actualizar la Persona';
            }
            domicilioDTO = {
                calle: alumnoFull.calle,
                altura: alumnoFull.altura,
                piso: alumnoFull.piso,
                dpto: alumnoFull.dpto,
                idPersona: persona.getIdPersona()
            }
            let idDomicilio: number = await this.alumnoRepository.query('select d.idDomicilio from domicilio AS d where d.idPersona = ' + idAlumno);
            if (!idDomicilio) {
                return resultado = 'No se pudo encontrar el Domicilio';
            } else {
                domicilio = await this.domicilioService.updateDomicilio(idDomicilio[0].idDomicilio, domicilioDTO);
                if (!domicilio) {
                    return resultado = 'No se pudo actualizar el Domicilio';
                }
            }
            telefonoDTO = {
                codArea: alumnoFull.codArea,
                nro: alumnoFull.nro,
                idPersona: persona.getIdPersona()
            }
            let idTelefono: number = await this.alumnoRepository.query('select t.idTelefono from telefono AS t where t.idPersona = ' + idAlumno);
            if (!idTelefono) {
                return resultado = 'No se pudo encontrar el Telefono';
            } else {
                telefono = await this.telefonoService.updateTelefono(idTelefono[0].idTelefono, telefonoDTO);
                if (!telefono) {
                    return resultado = 'No se pudo actualizar el Telefono';
                }
            }

            alumnoDTO = {
                nivelEstudioAlcanzado: alumnoFull.nivelEstudioAlcanzado,
                adeudaDocumentacion: alumnoFull.adeudaDocumentacion,
                idPersona: persona.getIdPersona()
            };
            alumno = await this.updateAlumno(idAlumno, alumnoDTO)
            if (!alumno) {
                return resultado = 'No se pudo actualizar el Alumno';
            }

            
            let borrarCursos: any = await this.alumnoRepository.query('delete from alumno_curso where idAlumno = ' + idAlumno);
            console.log(borrarCursos);
            if (!borrarCursos) {
                return resultado = 'No se pudo encontrar el/los Curso/s del Alumno';
            } else {
                for (let i = 0; i < alumnoFull.cursos.length; i++) {
                    curso = alumnoFull.cursos[i];
                    cursoGuardado = await this.alumnoRepository.query('insert into alumno_curso(idAlumno, idCurso) values(' + alumno.getIdAlumno() + ',' + curso.idCurso + ')');                
                    if (!cursoGuardado) {
                        return resultado = 'No se pudo guardar el Curso';
                    }
                }
            }


            resultado = "ok";
        }


        return resultado;
    }

}
