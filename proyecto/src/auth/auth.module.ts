import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { PersonaModule } from '../persona/persona.module';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants';
import { AuthController } from './auth.controller';

@Module({
  imports: [
    PersonaModule,
    PassportModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '60s' },
    }),
  ],
  providers: [
    AuthService
  ],
  exports: [AuthService],
  controllers: [AuthController]
})
export class AuthModule {}
