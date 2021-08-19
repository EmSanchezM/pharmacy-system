import { ApiProperty } from "@nestjs/swagger";
import { Exclude, Expose, Type } from "class-transformer";
import { IsNumber, IsString } from "class-validator";
import { ReadBranchOfficeDto } from "./read-branch-office.dto";

@Exclude()
export class ReadShelfDto {
    @IsNumber()
    @Expose()
    @ApiProperty({
        type: Number,
        description: 'Shelf ID'
    })
    readonly id: number;

    @IsString()
    @Expose()
    @ApiProperty({
        type: String,
        description: 'Name of the shelf in the branch office'
    })
    readonly name: string;

    @Expose()
    @ApiProperty({
        type: Number,
        description: 'Details of the branch office'
    })
    @Type(type=> ReadBranchOfficeDto)
    readonly branchOffice: ReadBranchOfficeDto;

}