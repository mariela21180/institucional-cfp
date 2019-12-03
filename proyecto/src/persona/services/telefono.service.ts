import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import Telefono from '../entities/telefono.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TelefonoService {
    public constructor(
        @InjectRepository(Telefono) private readonly domicilioRepository: Repository<Telefono>
    ) {}
}
