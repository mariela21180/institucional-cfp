import { Module } from '@nestjs/common';
import { FormularioService } from './services/formulario.service';
import { FormularioController } from './controllers/formulario.controller';

@Module({
  providers: [FormularioService],
  controllers: [FormularioController]
})
export class FormularioModule {}
