import { Controller, Get, Param, Post, Body, Delete, Put, UseGuards } from '@nestjs/common';
import { UsuarioService } from '../services/usuario.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('usuarios')
export class UsuarioController {
    public constructor(private usuarioService: UsuarioService) {}

    @Get()
    async getUsuarios() {
        return await this.usuarioService.getUsuarios();
    }

    @Get(':usuarioId')
    async getUsuario(@Param('usuarioId') usuarioId: any) {
        return await this.usuarioService.getUsuario(parseInt(usuarioId));
    }
    
    // @UseGuards(AuthGuard())
    @Post() // si se pone un id ya existente: SOBREESCRIBE!!! ---> VER proximamente!!!
    async addUsuario(@Body() usuario: any) {
        return await this.usuarioService.addUsuario(usuario);
    }
    
    // @UseGuards(AuthGuard())
    @Delete(':usuarioId')
    async deleteUsuario(@Param('usuarioId') usuarioId: any) {
        return await this.usuarioService.deleteUsuario(parseInt(usuarioId));
    }
    
    // // @UseGuards(AuthGuard())
    @Put(':usuarioId')
    async updateUsuario(@Param('usuarioId') usuarioId: any, @Body() usuario: any) {
        return await this.usuarioService.updateUsuario(parseInt(usuarioId), usuario);
    }
}
