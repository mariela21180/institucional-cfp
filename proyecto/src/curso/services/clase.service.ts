import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import Clase from '../entities/clase.entity';

@Injectable()
export class ClaseService {
    public constructor(
        @InjectRepository(Clase) private readonly claseRepository: Repository<Clase>
    ) {}
}
