import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import Formulario from '../entities/formulario.entity';
import { Repository } from 'typeorm';

@Injectable()
export class FormularioService {
    public constructor(
        @InjectRepository(Formulario) private readonly formularioRepository: Repository<Formulario>
    ) {}
}
