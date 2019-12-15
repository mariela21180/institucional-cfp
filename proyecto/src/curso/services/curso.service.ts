import { Injectable, HttpException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import Curso from '../entities/curso.entity';
import { CursoDto } from '../dto/curso-dto';
import { ClaseService } from './clase.service';

@Injectable()
export class CursoService {
    public constructor(
        @InjectRepository(Curso) private readonly cursoRepository: Repository<Curso>,
        private readonly claseService: ClaseService
    ) {}


    async addCurso(cursoDto: CursoDto): Promise<Curso> {
        const curso = new Curso(cursoDto['nombre'], cursoDto['idDocente'], cursoDto['fechaInicio'], cursoDto['cargaHorariaTotal'], cursoDto['fechaFin'], cursoDto['descripcion'], cursoDto['cupoMaximoAlumnos'], cursoDto['asistenciaMinima']);
        return await this.cursoRepository.save(curso);
    }
    
    async getCursos(): Promise<Curso[]> {
        return await this.cursoRepository.find();
    }
    
    async getCurso(cursoId: number): Promise<Curso> {
        const curso = await this.cursoRepository.findOne(cursoId);

        if (!curso) {
            throw new HttpException('Curso inexistente', 404);
        }
        return curso;
    }

    async deleteCurso(cursoId: number): Promise<Curso[]> {
        await this.cursoRepository.delete(cursoId);
        return await this.cursoRepository.find();
    }

    async updateCurso(cursoId:number, cursoDto: CursoDto): Promise<Curso> {
        const curso = await this.cursoRepository.findOne(cursoId);

        if (!curso) {
            throw new HttpException('Curso inexistente', 404);
        }
        curso.setNombre(cursoDto.nombre); 
        curso.setIdDocente(cursoDto.idDocente); 
        curso.setCargaHorariaTotal(cursoDto.cargaHorariaTotal); 
        curso.setFechaInicio(cursoDto.fechaInicio); 
        curso.setFechaFin(cursoDto.fechaFin); 
        curso.setDescripcion(cursoDto.descripcion); 
        curso.setCupoMaximoAlumnos(cursoDto.cupoMaximoAlumnos); 
        curso.setAsistenciaMinima(cursoDto.asistenciaMinima); 

        return await this.cursoRepository.save(curso);
    }

    

    async calcularHorasDictadas(idCurso: number): Promise<number> {
        const clases = await this.claseService.getClasesByCurso(idCurso);
        let horasDictadas: number = 0;
        let hoy = new Date();
        if (clases) {
            for (let i = 0; i < clases.length; i++) {
                const clase = clases[i];
                if (hoy > clase.getFin()) {
                    let inicio: number;
                    let fin: number;
                    let duracion: number;
                    let horas: number;
    
                    inicio = clase.getInicio().getTime();
                    fin = clase.getFin().getTime();
    
                    duracion = (fin - inicio);
    
                    horas = (duracion / (1000 * 60 * 60)) % 24;        
                    
                    horasDictadas += horas;
                }
            }
        }

        return horasDictadas;
    }

}
