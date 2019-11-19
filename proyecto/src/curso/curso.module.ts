import { Module } from '@nestjs/common';
import { CursoService } from './services/curso.service';
import { CursoController } from './controllers/curso.controller';

@Module({
  providers: [CursoService],
  controllers: [CursoController]
})
export class CursoModule {}
