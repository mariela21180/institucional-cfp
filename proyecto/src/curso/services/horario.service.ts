import { Injectable, HttpException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import Horario from '../entities/horario.entity';
import { HorarioDto } from '../dto/horario-dto';

@Injectable()
export class HorarioService {
    public constructor(
        @InjectRepository(Horario) private readonly horarioRepository: Repository<Horario>
    ) {}


    async addHorario(horarioDto: HorarioDto): Promise<Horario> {
        const horario = new Horario(horarioDto['idCurso'], horarioDto['dia'], horarioDto['horaInicio'], horarioDto['horaFin']);
        return await this.horarioRepository.save(horario);
    }

    async getHorarios(): Promise<Horario[]> {
        return await this.horarioRepository.find();
    }

    async getHorario(horarioId: number): Promise<Horario> {
        const horario = await this.horarioRepository.findOne(horarioId);

        if (!horario) {
            throw new HttpException('Horario inexistente', 404);
        }
        return horario;
    }

    async deleteHorario(horarioId: number): Promise<Horario[]> {
        await this.horarioRepository.delete(horarioId);
        return await this.horarioRepository.find();
    }

    async updateHorario(horarioId: number, horarioDto: HorarioDto): Promise<Horario> {
        const horario = await this.horarioRepository.findOne(horarioId);

        if (!horario) {
            throw new HttpException('Horario inexistente', 404);
        }
        horario.setDia(horarioDto.dia);
        horario.setHoraInicio(horarioDto.horaInicio);
        horario.setHoraFin(horarioDto.horaFin);

        return await this.horarioRepository.save(horario);
    }
}
