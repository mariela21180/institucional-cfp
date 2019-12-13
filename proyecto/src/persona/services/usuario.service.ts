import { Injectable, HttpException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import Usuario from '../entities/usuario.entity';
import { PersonaService } from './persona.service';
import { UsuarioDto } from '../dto/usuario-dto';

@Injectable()
export class UsuarioService {
    public constructor(
        @InjectRepository(Usuario) private readonly usuarioRepository: Repository<Usuario>,
        private readonly personaService: PersonaService
    ) {}

    async addUsuario(usuarioDto: UsuarioDto): Promise<Usuario[]> {
        const persona = await this.personaService.getPersona(usuarioDto.idPersona);
        if(!persona) {
            throw new HttpException('Persona does not exist!', 404);
        } 
        const usuario = new Usuario(usuarioDto['usuario'], usuarioDto['password'], usuarioDto['idPersona'], usuarioDto['nivelAcceso'] );
        await this.usuarioRepository.save(usuario);
        return await this.usuarioRepository.find();
    }

    async getUsuarios(): Promise<Usuario[]> {
        return await this.usuarioRepository.find();
    }

    async getUsuario(usuarioId: number): Promise<Usuario> {
        const usuario = await this.usuarioRepository.findOne(usuarioId);

        if (!usuario) {
            throw new HttpException('Usuario inexistente', 404);
        }
        return usuario;
    }

    async deleteUsuario(usuarioId: number): Promise<Usuario[]> {
        await this.usuarioRepository.delete(usuarioId);
        return await this.usuarioRepository.find();
    }

    async updateUsuario(usuarioId: number, usuarioDto: UsuarioDto): Promise<Usuario[]> {
        const usuario = await this.usuarioRepository.findOne(usuarioId);

        if (!usuario) {
            throw new HttpException('Usuario inexistente', 404);
        }

        usuario.setPassword(usuarioDto.password);
        usuario.setNivelAcceso(usuarioDto.nivelAcceso);

        await this.usuarioRepository.save(usuario);

        return await this.usuarioRepository.find();
    }

    async getUsuarioByUsername(nombreUsuario: string): Promise<Usuario> {
        const usuario = await this.usuarioRepository.findOne({
            where: {
                "usuario": nombreUsuario
            }
        });
        if (!usuario) {
            throw new HttpException('Usuario inexistente', 404);
        }
        return usuario;
    }
}
