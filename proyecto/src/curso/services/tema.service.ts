import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import Tema from '../entities/tema.entity';

@Injectable()
export class TemaService {
    public constructor(
        @InjectRepository(Tema) private readonly temaRepository: Repository<Tema>
    ) {}
}
