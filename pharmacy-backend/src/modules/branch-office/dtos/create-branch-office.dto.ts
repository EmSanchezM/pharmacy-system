import { ApiProperty } from "@nestjs/swagger";
import { Exclude, Expose } from "class-transformer";
import { IsString } from "class-validator";

@Exclude()
export class CreateBranchOfficeDto { 
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
    readonly phoneNumber: string;

    @IsString()
    @Expose()
    @ApiProperty({
        type: String,
        description: 'Address of the branch office'
    })
    readonly address: string;

    @Expose()
    @ApiProperty({
        type: Array,
        description: 'Array of shelf '
    })
    readonly shelfs: { name: string }[];
}