import { Injectable } from '@nestjs/common';
import { UsuarioService } from '../persona/services/usuario.service';
import { JwtService } from '@nestjs/jwt';
import passport = require('passport');
import { UsuarioDto } from '../persona/dto/usuario-dto';
import Usuario from '../persona/entities/usuario.entity';
import * as crypto from 'crypto';

@Injectable()
export class AuthService {
  constructor(
    private readonly usuarioService: UsuarioService,
    private readonly jwtService: JwtService
  ) {}

  async validateUser(usuario: UsuarioDto): Promise < Usuario > {
    console.log("Validando");
    console.log(usuario);
    const user = await this.usuarioService.getUsuarioByUsername(usuario.usuario);
    console.log(user);
    if (user && user.getPassword() === crypto.createHmac('sha256', usuario.password).digest('hex')) {
      return user;
    }
    return null;
  }

  async login(user: UsuarioDto) {
    return this.validateUser(user).then((userData)=>{
      if(!userData){
        return { status: 404 };
      }
      let payload = { username: userData.getUsuario(), idUsuario: userData.getIdUsuario() };
      const accessToken  = this.jwtService.sign(payload);
      return {
        expires_in: 3600,
        access_token: accessToken,
        user_id: payload,
        status: 200
      };
    });
  }

  public async register(user: UsuarioDto): Promise<any>{
    return this.usuarioService.addUsuario(user);
  }
}
