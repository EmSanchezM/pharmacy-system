import { ApiProperty } from "@nestjs/swagger";
import { Expose } from "class-transformer";
import { IsNumber, IsString } from "class-validator";

export class CreateShelfDto{
    @IsString()
    @Expose()
    @ApiProperty({
        type: String,
        description: 'Name of the shelf in the branch office'
    })
    name: string;

    @IsNumber()
    @Expose()
    @ApiProperty({
        type: String,
        description: 'Branch office id'
    })
    branch_office_id: number;
    
}