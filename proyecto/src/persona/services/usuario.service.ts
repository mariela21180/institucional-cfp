import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import Usuario from '../entities/usuario.entity';

@Injectable()
export class UsuarioService {
    public constructor(
        @InjectRepository(Usuario) private readonly archivoRepository: Repository<Usuario>
    ) {}
}
