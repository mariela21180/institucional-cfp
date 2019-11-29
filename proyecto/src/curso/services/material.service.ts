import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import Material from '../entities/material.entity';

@Injectable()
export class MaterialService {
    public constructor(
        @InjectRepository(Material) private readonly materialRepository: Repository<Material>
    ) {}
}
