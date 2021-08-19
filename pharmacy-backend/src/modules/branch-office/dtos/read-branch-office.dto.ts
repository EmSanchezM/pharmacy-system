import { ApiProperty } from "@nestjs/swagger";
import { Exclude, Expose } from "class-transformer";
import { IsNumber, IsString } from "class-validator";

@Exclude()
export class ReadBranchOfficeDto {
    @IsNumber()
    @Expose()
    @ApiProperty({
        type: Number,
        description: 'Branch Office ID'
    })
    readonly id: number;

    @IsString()
    @Expose()
    @ApiProperty({
        type: String,
        description: 'Name of the branch office'
    })
    readonly name: string;

    @IsString()
    @Expose()
    @ApiProperty({
        type: String,
        description: 'Phone number of the branch office'
    })
    readonly phoneNumber:string;

    @IsString()
    @Expose()
    @ApiProperty({
        type: String,
        description: 'Address of the branch office'
    })
    address: string;

}