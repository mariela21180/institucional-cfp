import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import Alumno from '../entities/alumno.entity';

@Injectable()
export class AlumnoService {
    public constructor(
        @InjectRepository(Alumno) private readonly archivoRepository: Repository<Alumno>
    ) {}
}
