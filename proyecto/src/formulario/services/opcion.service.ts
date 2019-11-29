import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import Opcion from '../entities/opcion.entity';

@Injectable()
export class OpcionService {
    public constructor(
        @InjectRepository(Opcion) private readonly opcionRepository: Repository<Opcion>
    ) {}
}
