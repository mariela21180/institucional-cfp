import { Controller, Get, Param, Post, Body, Delete, Put } from '@nestjs/common';
import { ArchivoService } from '../services/archivo.service';

@Controller('archivos')
export class ArchivoController {
    public constructor(private archivoService: ArchivoService) {}
    
    @Get()
    async getArchivos() {
        return await this.archivoService.getArchivos();
    }

    @Get(':archivoId')
    async getArchivo(@Param('archivoId') archivoId: any) {
        return await this.archivoService.getArchivo(parseInt(archivoId));
    }

    // @UseGuards(AuthGuard())
    @Post()
    async addArchivo(@Body() archivo: any) {
        return await this.archivoService.addArchivo(archivo);
    }
    
    // @UseGuards(AuthGuard())
    @Delete(':archivoId')
    async deleteArchivo(@Param('archivoId') archivoId: any) {
        return await this.archivoService.deleteArchivo(parseInt(archivoId));
    }
    
    // @UseGuards(AuthGuard())
    @Put(':archivoId')
    async updateArchivo(@Param('archivoId') archivoId: any, @Body() archivo: any) {
        return await this.archivoService.updateArchivo(parseInt(archivoId), archivo);
    }
}
