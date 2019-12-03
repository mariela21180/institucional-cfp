import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import Curso from '../entities/curso.entity';

@Injectable()
export class CursoService {
    public constructor(
        @InjectRepository(Curso) private readonly cursoRepository: Repository<Curso>
    ) {}
}
