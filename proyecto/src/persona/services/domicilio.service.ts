import { Injectable } from '@nestjs/common';
import Domicilio from '../entities/domicilio.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class DomicilioService {
    public constructor(@InjectRepository(Domicilio)
    private readonly domicilioRepository: Repository<Domicilio>){
        
    }
}
