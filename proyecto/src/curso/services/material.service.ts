import { Injectable, HttpException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import Material from '../entities/material.entity';
import { MaterialDto } from '../dto/material-dto';

@Injectable()
export class MaterialService {
    public constructor(
        @InjectRepository(Material) private readonly materialRepository: Repository<Material>
    ) {}
    async addMaterial(materialDto: MaterialDto): Promise<Material> {
        console.log(materialDto);
        const material = new Material(materialDto['idClase'], materialDto['habilitado']);
        return await this.materialRepository.save(material);
    }

    async getMaterials(): Promise<Material[]> {
        return await this.materialRepository.find();
    }

    async getMaterial(materialId: number): Promise<Material> {
        const material = await this.materialRepository.findOne(materialId);

        if (!material) {
            throw new HttpException('Material inexistente', 404);
        }
        return material;
    }

    async deleteMaterial(materialId: number): Promise<Material[]> {
        await this.materialRepository.delete(materialId);
        return await this.materialRepository.find();
    }

    async updateMaterial(materialId: number, materialDto: MaterialDto): Promise<Material> {
        const material = await this.materialRepository.findOne(materialId);

        if (!material) {
            throw new HttpException('Material inexistente', 404);
        }
        material.setHabilitado(materialDto.habilitado);

        return await this.materialRepository.save(material);
    }
}
