import { Controller, Body, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(private  readonly  authService:  AuthService) {}

    @Post('login')
    async login(@Body() user: any) {
      return this.authService.login(user);
    }  

    @Post('register')
    async register(@Body() user: any) {
      return this.authService.register(user);
    } 
}
