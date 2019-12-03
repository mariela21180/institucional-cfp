import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import Archivo from '../entities/archivo.entity';

@Injectable()
export class ArchivoService {
    public constructor(
        @InjectRepository(Archivo) private readonly archivoRepository: Repository<Archivo>
    ) {}
}
