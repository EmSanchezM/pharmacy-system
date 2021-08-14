import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiBody, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateLaboratoryDto, ReadLaboratoryDto } from './dtos';
import { LaboratoryService } from './laboratory.service';

@Controller('laboratory')
@ApiTags('Laboratory')
export class LaboratoryController {
    constructor(private readonly _laboratoryService: LaboratoryService) { }

    @Get(':id')
    @ApiParam({
        type: Number,
        name: 'id',
        description: 'Laboratory Id to get a laboratory pharmacist of medicine',
    })
    @ApiResponse({
        status: 200,
        description: 'Show a laboratories',
    })
    async findOneLaboratory(@Param() id: number): Promise<ReadLaboratoryDto> {
        const laboratory = await this._laboratoryService.findOne(id);
        return laboratory;
    }

    @Get()
    @ApiResponse({
        status: 200,
        description: 'Shows all laboratories pharmacist of medicine',
    })
    async findAllLaboratories(): Promise<ReadLaboratoryDto[]> {
        const laboratories = await this._laboratoryService.findAll();
        return laboratories;
    }

    @Post()
    @ApiBody({ type: [CreateLaboratoryDto] })
    @ApiResponse({
        status: 201,
        description: 'The record has been successfully created.',
    })
    async createLaboratory(
        @Body() laboratory: CreateLaboratoryDto,
    ): Promise<ReadLaboratoryDto> {
        const createdLaboratory = this._laboratoryService.create(laboratory);
        return createdLaboratory;
    }

    @Put(':id')
    @ApiParam({
        type: Number,
        name: 'id',
        description: 'Laboratory Id to update a laboratory',
    })
    @ApiResponse({
        status: 200,
        description: 'The record has been successfully updated.',
    })
    async updateLaboratory(
        @Param('id') id: number,
        @Body() laboratory: CreateLaboratoryDto,
    ): Promise<ReadLaboratoryDto> {
        const updatedLaboratory = await this._laboratoryService.update(id, laboratory);
        return updatedLaboratory;
    }

    @Delete(':id')
    @ApiParam({
        name: 'id',
        description: 'Laboratory Id to delete a laboratory',
    })
    @ApiResponse({
        status: 200,
        description: 'Removed the laboratory',
    })
    async deleteLaboratory(@Param('id') id: number) {
        await this._laboratoryService.delete(id);
        return true;
    }
}
