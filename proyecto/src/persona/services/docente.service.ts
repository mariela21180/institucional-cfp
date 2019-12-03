import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import Docente from '../entities/docente.entity';

@Injectable()
export class DocenteService {
    public constructor(
        @InjectRepository(Docente) private readonly archivoRepository: Repository<Docente>
    ) {}
}
