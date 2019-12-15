import { Injectable, HttpException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import Tema from '../entities/tema.entity';
import { TemaDto } from '../dto/tema-dto';

@Injectable()
export class TemaService {
    public constructor(
        @InjectRepository(Tema) private readonly temaRepository: Repository<Tema>
    ) {}

    async addTema(temaDto: TemaDto): Promise<Tema> {
        console.log(temaDto);
        const tema = new Tema(temaDto['tema'], temaDto['idMaterial']);
        return await this.temaRepository.save(tema);
    }

    async getTemas(): Promise<Tema[]> {
        return await this.temaRepository.find();
    }

    async getTema(temaId: number): Promise<Tema> {
        const tema = await this.temaRepository.findOne(temaId);

        if (!tema) {
            throw new HttpException('Tema inexistente', 404);
        }
        return tema;
    }

    async deleteTema(temaId: number): Promise<Tema[]> {
        await this.temaRepository.delete(temaId);
        return await this.temaRepository.find();
    }

    async updateTema(temaId: number, temaDto: TemaDto): Promise<Tema> {
        const tema = await this.temaRepository.findOne(temaId);

        tema.setTema(temaDto.tema)

        return await this.temaRepository.save(tema);
    }
}
