import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import Horario from '../entities/horario.entity';

@Injectable()
export class HorarioService {
    public constructor(
        @InjectRepository(Horario) private readonly horarioRepository: Repository<Horario>
    ) {}
}
