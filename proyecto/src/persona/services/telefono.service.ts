import { Injectable, HttpException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import Telefono from '../entities/telefono.entity';
import { Repository } from 'typeorm';
import { TelefonoDto } from '../dto/telefono-dto';

@Injectable()
export class TelefonoService {
    public constructor(
        @InjectRepository(Telefono) private readonly telefonoRepository: Repository<Telefono>
    ) {}

    async addTelefono(telefonoDto: TelefonoDto): Promise<Telefono[]> {
        const telefono = new Telefono(telefonoDto['codArea'], telefonoDto['nro'], telefonoDto['idPersona']);
        await this.telefonoRepository.save(telefono);
        return await this.telefonoRepository.find();
    }

    async getTelefonos(): Promise<Telefono[]> {
        return await this.telefonoRepository.find();
    }

    async getTelefono(telefonoId: number): Promise<Telefono> {
        const telefono = await this.telefonoRepository.findOne(telefonoId);

        if (!telefono) {
            throw new HttpException('Telefono inexistente', 404);
        }
        return telefono;
    }

    async deleteTelefono(telefonoId: number): Promise<Telefono[]> {
        await this.telefonoRepository.delete(telefonoId);
        return await this.telefonoRepository.find();
    }

    // async updateTelefono(telefonoId:number, telefonoDto: TelefonoDto): Promise<Telefono[]> {
    //     const telefono = await this.telefonoRepository.findOne(telefonoId);

    //     if (!telefonoId) {
    //         throw new HttpException('Telefono inexistente', 404);
    //     }
    //     telefono.setCodArea(telefonoDto.codArea); 
    //     telefono.setNro(telefonoDto.nro); 

    //     await this.telefonoRepository.save(telefono);
        
    //     return await this.telefonoRepository.find();
    // }
}
