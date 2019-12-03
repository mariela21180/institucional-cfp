import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
// Entities
import Examen from './entities/examen.entity';
import Formulario from './entities/formulario.entity';
import Opcion from './entities/opcion.entity';
import Pregunta from './entities/pregunta.entity';
import TipoPregunta from './entities/tipopregunta.entity';
// Services
import { ExamenService } from './services/examen.service';
import { FormularioService } from './services/formulario.service';
import { OpcionService } from './services/opcion.service';
import { PreguntaService } from './services/pregunta.service';
import { TipoPreguntaService } from './services/tipopregunta.service';
// Controllers
import { ExamenController } from './controllers/examen.controller';
import { FormularioController } from './controllers/formulario.controller';
import { OpcionController } from './controllers/opcion.controller';
import { PreguntaController } from './controllers/pregunta.controller';
import { TipoPreguntaController } from './controllers/tipopregunta.controller';

@Module({
  imports: [TypeOrmModule.forFeature([
    Examen,
    Formulario,
    Opcion,
    Pregunta, 
    TipoPregunta
  ])],
  providers: [
    ExamenService,
    FormularioService,
    OpcionService,
    PreguntaService, 
    TipoPreguntaService
  ],
  controllers: [
    ExamenController,
    FormularioController,
    OpcionController,
    PreguntaController, 
    TipoPreguntaController
  ]
})
export class FormularioModule {}
