import { Controller, Get, Param, Post, Body, Put, Delete, UseGuards } from '@nestjs/common';
import { PersonaService } from '../services/persona.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('personas')
export class PersonaController {
    public constructor(private personaService: PersonaService) {}
    
    @Get()
    async getPersonas() {
        return await this.personaService.getPersonas();
    }

    @Get(':personaId')
    async getPersona(@Param('personaId') personaId: any) {
        return await this.personaService.getPersona(parseInt(personaId));
    }

    // @UseGuards(AuthGuard())
    @Post()
    async addPersona(@Body() persona: any) {
        return await this.personaService.addPersona(persona);
    }
    
    // @UseGuards(AuthGuard())
    @Delete(':personaId')
    async deletePersona(@Param('personaId') personaId: any) {
        return await this.personaService.deletePersona(parseInt(personaId));
    }
    
    // @UseGuards(AuthGuard())
    @Put(':personaId')
    async updatePersona(@Param('personaId') personaId: any, @Body() persona: any) {
        return await this.personaService.updatePersona(parseInt(personaId), persona);
    }
}
