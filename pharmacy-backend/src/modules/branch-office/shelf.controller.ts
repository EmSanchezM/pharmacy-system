import { Controller, Get } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { BranchOfficeService } from './branch-office.service';

import { ReadShelfDto } from './dtos/read-shelf.dto';
import { ShelfService } from './shelf.service';

@Controller('shelfs')
@ApiTags('Shelfs')
export class ShelfController {
    constructor(
        private readonly _shelfService: ShelfService
    ){}

   

    @Get()
    @ApiResponse({
        status: 200,
        description: 'Show all Shelfs'
    })
    async findAllBranchOffice(): Promise<ReadShelfDto[]>{
        const shelfs = await this._shelfService.findAll();
        return shelfs;
    }

}
