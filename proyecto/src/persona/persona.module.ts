import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
// Entities
import Alumno from './entities/alumno.entity';
import Docente from './entities/docente.entity';
import Persona from './entities/persona.entity';
import Domicilio from './entities/domicilio.entity';
import Telefono from './entities/telefono.entity';
import Usuario from './entities/usuario.entity';
// Services
import { AlumnoService } from './services/alumno.service';
import { DocenteService } from './services/docente.service';
import { PersonaService } from './services/persona.service';
import { DomicilioService } from './services/domicilio.service';
import { TelefonoService } from './services/telefono.service';
import { UsuarioService } from './services/usuario.service';
// Controllers
import { AlumnoController } from './controllers/alumno.controller';
import { DocenteController } from './controllers/docente.controller';
import { PersonaController } from './controllers/persona.controller';
import { TelefonoController } from './controllers/telefono.controller';
import { DomicilioController } from './controllers/domicilio.controller';
import { UsuarioController } from './controllers/usuario.controller';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [TypeOrmModule.forFeature([
      Alumno,
      Docente,
      Persona,
      Domicilio,
      Telefono,
      Usuario
    ]),
    PassportModule.register({ defaultStrategy: 'jwt' })
  ],
  providers: [
    AlumnoService,
    DocenteService,
    PersonaService,
    DomicilioService,
    TelefonoService,
    UsuarioService
  ],
  controllers: [
    AlumnoController,
    DocenteController,
    PersonaController,
    DomicilioController,
    TelefonoController,
    UsuarioController
  ],
  exports: [
    UsuarioService
  ]
})
export class PersonaModule {}
