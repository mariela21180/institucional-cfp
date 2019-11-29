import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import Pregunta from '../entities/pregunta.entity';

@Injectable()
export class PreguntaService {
    public constructor(
        @InjectRepository(Pregunta) private readonly preguntaRepository: Repository<Pregunta>
    ) {}
}
