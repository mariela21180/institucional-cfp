import { Injectable, HttpException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import Archivo from '../entities/archivo.entity';
import { ArchivoDto } from '../dto/archivo-dto';

@Injectable()
export class ArchivoService {
    public constructor(
        @InjectRepository(Archivo) private readonly archivoRepository: Repository<Archivo>
    ) {}
    
    async addArchivo(archivoDto: ArchivoDto): Promise<Archivo> {
        console.log(archivoDto);
        const archivo = new Archivo(archivoDto['ruta'], archivoDto['idMaterial']);
        return await this.archivoRepository.save(archivo);
    }

    async getArchivos(): Promise<Archivo[]> {
        return await this.archivoRepository.find();
    }

    async getArchivo(archivoId: number): Promise<Archivo> {
        const archivo = await this.archivoRepository.findOne(archivoId);

        if (!archivo) {
            throw new HttpException('Archivo inexistente', 404);
        }
        return archivo;
    }

    async deleteArchivo(archivoId: number): Promise<Archivo[]> {
        await this.archivoRepository.delete(archivoId);
        return await this.archivoRepository.find();
    }

    async updateArchivo(archivoId: number, archivoDto: ArchivoDto): Promise<Archivo> {
        const archivo = await this.archivoRepository.findOne(archivoId);

        archivo.setRuta(archivoDto.ruta)

        return await this.archivoRepository.save(archivo);
    }
}
