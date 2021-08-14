import { ApiProperty } from "@nestjs/swagger";
import { Exclude, Expose } from "class-transformer";
import { IsNumber, IsString } from "class-validator";

@Exclude()
export class ReadLaboratoryDto { 
    
    @IsNumber()
    @ApiProperty({
        type: String,
        description: 'Code of the laboratory pharmacist'
    })
    @Expose()
    id:number;

    @IsString()
    @ApiProperty({
        type: String,
        description: 'Name of the laboratory pharmacist'
    })
    @Expose()
    readonly name: string;

    @IsString()
    @ApiProperty({
        type: String,
        description: 'Direction of the laboratory pharmacist'
    })
    @Expose()
    readonly direction: string;

    @IsString()
    @ApiProperty({
        type: String,
        description: 'Phone Number of the laboratory pharmacist'
    })
    @Expose()
    readonly phoneNumber:string;

}