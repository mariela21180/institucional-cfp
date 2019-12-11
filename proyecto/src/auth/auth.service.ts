import { Injectable } from '@nestjs/common';
import { UsuarioService } from '../persona/services/usuario.service';

@Injectable()
export class AuthService {
  constructor(private readonly usuarioService: UsuarioService) {}

  async validateUser(usuario: string, password: string): Promise < any > {
    const user = await this.usuarioService.getUsuarioByUsername(usuario);
    if (user && user.getPassword() === password) {
      const { getPassword, ...result } = user;
      return result;
    }
    return null;
  }
}
