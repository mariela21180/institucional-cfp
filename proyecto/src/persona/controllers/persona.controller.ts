import { Controller, Get, Param, Post, Body, Put, Delete } from '@nestjs/common';
import { PersonaService } from '../services/persona.service';

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

    @Post()
    async addPersona(@Body() persona: any) {
        return await this.personaService.addPersona(persona);
    }

    
    @Delete(':personaId')
    async deletePersona(@Param('personaId') personaId: any) {
        return await this.personaService.deletePersona(parseInt(personaId));
    }
    
    @Put(':personaId')
    async updatePersona(@Param('personaId') personaId: any, @Body() persona: any) {
        return await this.personaService.updatePersona(parseInt(personaId), persona);
    }
}
