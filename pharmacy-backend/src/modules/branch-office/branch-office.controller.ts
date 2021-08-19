import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiBody, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { BranchOfficeService } from './branch-office.service';
import { CreateBranchOfficeDto } from './dtos/create-branch-office.dto';
import { ReadBranchOfficeDto } from './dtos/read-branch-office.dto';
import { UpdateBranchOfficeDto } from './dtos/update-branch-office.dto';

@Controller('branch-offices')
@ApiTags('Branch Office')
export class BranchOfficeController {
    constructor(
        private readonly _branchOfficeService: BranchOfficeService
    ){}

    @Get(':id')
    @ApiParam({
        type: Number,
        name: 'id',
        description: 'Branch Office id to get branch office'
    })
    @ApiResponse({
        status: 200,
        description: 'Show a branch office'
    })
    async findOneBranchOffice(@Param('id') id:number): Promise<ReadBranchOfficeDto>{
        const branchOffice = await this._branchOfficeService.findOne(id);
        return branchOffice;
    }

    @Get()
    @ApiResponse({
        status: 200,
        description: 'Show all branch offices'
    })
    async findAllBranchOffice(): Promise<ReadBranchOfficeDto[]>{
        const branchOffices = await this._branchOfficeService.findAll();
        return branchOffices;
    }

    @Post()
    @ApiBody({ type: [CreateBranchOfficeDto] })
    @ApiResponse({
        status: 201,
        description: 'The record has been successfully created.'
    })
    async createBranchOffice(
        @Body() branchOffice: CreateBranchOfficeDto
    ): Promise<ReadBranchOfficeDto>{
        const createdBranchOffice = await this._branchOfficeService.create(branchOffice);
        return createdBranchOffice;
    }

    @Put(':id')
    @ApiParam({
        type: Number,
        name: 'id',
        description: 'Branch Office id to update a branch office'
    })
    @ApiResponse({
        status: 200,
        description: 'The record has been successfully updated.'
    })
    async updateBranchOffice(
        @Param('id') id: number,
        @Body() branchOffice: UpdateBranchOfficeDto,
    ): Promise<ReadBranchOfficeDto>{
        const updatedBranchOffice = await this._branchOfficeService.update(id, branchOffice);
        return updatedBranchOffice;
    }

    @Delete(':id')
    @ApiParam({
        name: 'id',
        description: 'Branch Office Id to delete a branch office'
    })
    @ApiResponse({
        status: 200,
        description: 'Removed the branch office'
    })
    async deleteBranchOffice(@Param('id') id: number) {
        await this._branchOfficeService.delete(id);
        return true;
    }

}
