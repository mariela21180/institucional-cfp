import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
// Entities
import Persona from './entities/persona.entity';
import Domicilio from './entities/domicilio.entity';
import Telefono from './entities/telefono.entity';
// Services
import { PersonaService } from './services/persona.service';
import { DomicilioService } from './services/domicilio.service';
import { TelefonoService } from './services/telefono.service';
// Controllers
import { PersonaController } from './controllers/persona.controller';
import { TelefonoController } from './controllers/telefono.controller';
import { DomicilioController } from './controllers/domicilio.controller';

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
