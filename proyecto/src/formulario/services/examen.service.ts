import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import Examen from '../entities/examen.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ExamenService {
    public constructor(
        @InjectRepository(Examen) private readonly examenRepository: Repository<Examen>
    ) {}
}
