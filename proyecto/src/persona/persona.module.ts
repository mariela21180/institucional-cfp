import { Module } from '@nestjs/common';
import { PersonaService } from './services/persona.service';
import { PersonaController } from './controllers/persona.controller';

@Module({
  providers: [PersonaService],
  controllers: [PersonaController]
})
export class PersonaModule {}
