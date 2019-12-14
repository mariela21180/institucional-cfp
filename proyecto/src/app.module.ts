import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CursoModule } from './curso/curso.module';
import { PersonaModule } from './persona/persona.module';
import { FormularioModule } from './formulario/formulario.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..',
      'client'),
    }),
    TypeOrmModule.forRoot(),
    CursoModule,
    PersonaModule,
    FormularioModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
