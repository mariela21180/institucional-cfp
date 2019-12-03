import { Injectable } from '@nestjs/common';
import TipoPregunta from '../entities/tipopregunta.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class TipoPreguntaService {
    public constructor(
        @InjectRepository(TipoPregunta) private readonly tipoPreguntaRepository: Repository<TipoPregunta>
    ) {}
}
