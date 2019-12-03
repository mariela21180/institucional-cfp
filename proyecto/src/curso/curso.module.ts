import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
// Entities
import Archivo from './entities/archivo.entity';
import Clase from './entities/clase.entity';
import Curso from './entities/curso.entity';
import Horario from './entities/horario.entity';
import Material from './entities/material.entity';
import Tema from './entities/tema.entity';
// Services
import { ArchivoService } from './services/archivo.service';
import { CursoService } from './services/curso.service';
import { ClaseService } from './services/clase.service';
import { HorarioService } from './services/horario.service';
import { MaterialService } from './services/material.service';
import { TemaService } from './services/tema.service';
// Controllers
import { ArchivoController } from './controllers/archivo.controller';
import { ClaseController } from './controllers/clase.controller';
import { CursoController } from './controllers/curso.controller';
import { HorarioController } from './controllers/horario.controller';
import { MaterialController } from './controllers/material.controller';
import { TemaController } from './controllers/tema.controller';

@Module({
  imports: [TypeOrmModule.forFeature([
    Archivo,
    Clase,
    Curso,
    Horario,
    Material,
    Tema
  ])],
  providers: [
    ArchivoService,
    ClaseService,
    CursoService,
    HorarioService,
    MaterialService,
    TemaService
  ],
  controllers: [
    ArchivoController,
    ClaseController,
    CursoController,
    HorarioController,
    MaterialController,
    TemaController
  ]
})
export class CursoModule {}
