import { Exclude, Expose } from "class-transformer";
import { IsNumber, IsString } from "class-validator";

import { ApiProperty } from '@nestjs/swagger';

@Exclude()
export class ReadCategoryDto {
    @IsNumber()
    @Expose()
    @ApiProperty({
        type: Number,
        description: 'Category ID'
    })
    readonly id: number;
    
    @IsString()
    @Expose()
    @ApiProperty({
        type: String,
        description: 'Name of the category of a product or medicine'
    })
    readonly name: string;
}