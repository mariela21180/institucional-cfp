import { Injectable, HttpException } from '@nestjs/common';
import Domicilio from '../entities/domicilio.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { DomicilioDto } from '../dto/domicilio-dto';

@Injectable()
export class DomicilioService {
    public constructor(
        @InjectRepository(Domicilio) private readonly domicilioRepository: Repository<Domicilio>
    ) { }

    async addDomicilio(domicilioDto: DomicilioDto): Promise<Domicilio> {
        const domicilio = new Domicilio(domicilioDto['calle'], domicilioDto['altura'], domicilioDto['piso'], domicilioDto['dpto']);
        return await this.domicilioRepository.save(domicilio);
    }

    async getDomicilios(): Promise<Domicilio[]> {
        return await this.domicilioRepository.find();
    }

    async getDomicilio(domicilioId: number): Promise<Domicilio> {
        const domicilio = await this.domicilioRepository.findOne(domicilioId);

        if (!domicilio) {
            throw new HttpException('Domicilio inexistente', 404);
        }
        return domicilio;
    }

    async deleteDomicilio(domicilioId: number): Promise<Domicilio[]> {
        await this.domicilioRepository.delete(domicilioId);
        return await this.domicilioRepository.find();
    }

    async updateDomicilio(domicilioId: number, domicilioDto: DomicilioDto): Promise<Domicilio> {
        const domicilio = await this.domicilioRepository.findOne(domicilioId);

        if (!domicilio) {
            throw new HttpException('Domicilio inexistente', 404);
        }

        domicilio.setCalle(domicilioDto.calle);
        domicilio.setAltura(domicilioDto.altura);
        domicilio.setPiso(domicilioDto.piso);
        domicilio.setDpto(domicilioDto.dpto);

        return await this.domicilioRepository.save(domicilio);
    }

}
