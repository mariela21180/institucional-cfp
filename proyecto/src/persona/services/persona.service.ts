import { Injectable, HttpException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import Persona from '../entities/persona.entity';
import { Repository } from 'typeorm';
import { PersonaDto } from '../dto/persona-dto';

@Injectable()
export class PersonaService {
    public constructor(
        @InjectRepository(Persona) private readonly personaRepository: Repository<Persona>
    ) {}


    async addPersona(personaDto: PersonaDto): Promise<Persona[]> {
        const persona = new Persona(personaDto['nombre'], personaDto['apellido'], personaDto['dni'], personaDto['eMail']);
        await this.personaRepository.save(persona);
        return await this.personaRepository.find();
    }
    
    async getPersonas(): Promise<Persona[]> {
        return await this.personaRepository.find();
    }
    
    async getPersona(personaId: number): Promise<Persona> {
        const persona = await this.personaRepository.findOne(personaId);

        if (!persona) {
            throw new HttpException('Persona inexistente', 404);
        }
        return persona;
    }

    async deletePersona(personaId: number): Promise<Persona[]> {
        await this.personaRepository.delete(personaId);
        return await this.personaRepository.find();
    }

    async updatePersona(personaId:number, personaDto: PersonaDto): Promise<Persona[]> {
        const persona = await this.personaRepository.findOne(personaId);

        if (!persona) {
            throw new HttpException('Persona inexistente', 404);
        }
        persona.setNombre(personaDto.nombre); 
        persona.setApellido(personaDto.apellido); 
        persona.setDni(personaDto.dni); 
        persona.setEMail(personaDto.eMail); 

        await this.personaRepository.save(persona);
        
        return await this.personaRepository.find();
    }

} 
