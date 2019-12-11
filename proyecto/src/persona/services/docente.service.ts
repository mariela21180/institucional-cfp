import { Injectable, HttpException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import Docente from '../entities/docente.entity';
import { DocenteDto } from '../dto/docente-dto';
import Persona from '../entities/persona.entity';
import { PersonaService } from './persona.service';

@Injectable()
export class DocenteService {
    public constructor(
        @InjectRepository(Docente) 
        private readonly docenteRepository: Repository<Docente>,
        private readonly personaService: PersonaService
    ) {}

    async addDocente(docenteDto: DocenteDto): Promise<Docente[]> {
        const persona = await this.personaService.getPersona(docenteDto.idPersona);
        if(!persona) {
            throw new HttpException('Persona does not exist!', 404);
        } 
        const docente = new Docente(docenteDto['idDocente'], docenteDto['nivelEstudioAlcanzado'], docenteDto['titulo']);
        await this.docenteRepository.save(docente);
        return await this.docenteRepository.find();
    }

    async getDocentes(): Promise<Docente[]> {
        return await this.docenteRepository.find();
    }

    async getDocente(docenteId: number): Promise<Docente> {
        const docente = await this.docenteRepository.findOne(docenteId);

        if (!docente) {
            throw new HttpException('Docente inexistente', 404);
        }
        return docente;
    }

    async deleteDocente(docenteId: number): Promise<Docente[]> {
        await this.docenteRepository.delete(docenteId);
        return await this.docenteRepository.find();
    }

    async updateDocente(docenteId: number, docenteDto: DocenteDto): Promise<Docente[]> {
        const docente = await this.docenteRepository.findOne(docenteId);

        if (!docente) {
            throw new HttpException('Docente inexistente', 404);
        }

        docente.setNivelEstudioAlcanzado(docenteDto.nivelEstudioAlcanzado);
        docente.setTitulo(docenteDto.titulo);

        await this.docenteRepository.save(docente);

        return await this.docenteRepository.find();
    }

}
