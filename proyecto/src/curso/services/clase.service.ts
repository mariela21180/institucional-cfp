import { Injectable, HttpException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Connection } from 'typeorm';
import Clase from '../entities/clase.entity';
import { ClaseDto } from '../dto/clase-dto';
import Alumno from '../../persona/entities/alumno.entity';

@Injectable()
export class ClaseService {
    public constructor(
        @InjectRepository(Clase) private readonly claseRepository: Repository<Clase>
    ) {}

    
    async addClase(claseDto: ClaseDto): Promise<Clase> {
        const clase = new Clase(claseDto['idCurso'], claseDto['inicio'], claseDto['fin']);
        return await this.claseRepository.save(clase);
    }

    async getClases(): Promise<Clase[]> {
        return await this.claseRepository.find();
    }

    async getClase(claseId: number): Promise<Clase> {
        const clase = await this.claseRepository.findOne(claseId);

        if (!clase) {
            throw new HttpException('Clase inexistente', 404);
        }
        return clase;
    }

    async deleteClase(claseId: number): Promise<Clase[]> {
        await this.claseRepository.delete(claseId);
        return await this.claseRepository.find();
    }

    async updateClase(claseId: number, claseDto: ClaseDto): Promise<Clase> {
        const clase = await this.claseRepository.findOne(claseId);

        if (!clase) {
            throw new HttpException('Clase inexistente', 404);
        }
        clase.setInicio(claseDto.inicio);
        clase.setFin(claseDto.fin);

        return await this.claseRepository.save(clase);
    }

    
    async getClasesByCurso(idCurso: number): Promise<Clase[]> {
        const clases = await this.claseRepository.find({
            where: {
                "idCurso": idCurso
            }
        }); 
        if (!clases) {
            throw new HttpException('No hay Clases para este curso', 404);
        }
        return clases;
    }
}
