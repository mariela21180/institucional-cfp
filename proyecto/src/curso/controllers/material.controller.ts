import { Controller, Get, Post, Body, Delete, Param, Put } from '@nestjs/common';
import { MaterialService } from '../services/material.service';

@Controller('materiales')
export class MaterialController {
    public constructor(private materialService: MaterialService) {}
    
    @Get()
    async getMaterials() {
        return await this.materialService.getMaterials();
    }

    @Get(':materialId')
    async getMaterial(@Param('materialId') materialId: any) {
        return await this.materialService.getMaterial(parseInt(materialId));
    }

    // @UseGuards(AuthGuard())
    @Post()
    async addMaterial(@Body() material: any) {
        return await this.materialService.addMaterial(material);
    }
    
    // @UseGuards(AuthGuard())
    @Delete(':materialId')
    async deleteMaterial(@Param('materialId') materialId: any) {
        return await this.materialService.deleteMaterial(parseInt(materialId));
    }
    
    // @UseGuards(AuthGuard())
    @Put(':materialId')
    async updateMaterial(@Param('materialId') materialId: any, @Body() material: any) {
        return await this.materialService.updateMaterial(parseInt(materialId), material);
    }
}
