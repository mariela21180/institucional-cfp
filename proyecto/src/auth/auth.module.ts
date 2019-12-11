import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { PersonaModule } from '../persona/persona.module';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './local.strategy';

@Module({
  imports: [
    PersonaModule,
    PassportModule
  ],
  providers: [
    AuthService,
    LocalStrategy
  ]
})
export class AuthModule {}
