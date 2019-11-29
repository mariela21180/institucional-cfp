import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import Persona from '../entities/persona.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PersonaService {
    public constructor(
        @InjectRepository(Persona) private readonly personaRepository: Repository<Persona>
    ) {}


} 
