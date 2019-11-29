import { Module } from '@nestjs/common';
import { PersonaService } from './services/persona.service';
import { PersonaController } from './controllers/persona.controller';
import { DomicilioService } from './services/domicilio.service';
import { TelefonoService } from './services/telefono.service';
import { TelefonoController } from './controllers/telefono.controller';
import { DomicilioController } from './controllers/domicilio.controller';
import Domicilio from './entities/domicilio.entity';
import Persona from './entities/persona.entity';
import Telefono from './entities/telefono.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([
    Persona,
    Domicilio,
    Telefono,
  ])],
  providers: [
    PersonaService,
    DomicilioService,
    TelefonoService,
  ],
  controllers: [
    PersonaController,
    DomicilioController,
    TelefonoController
  ]
})
export class PersonaModule {}
