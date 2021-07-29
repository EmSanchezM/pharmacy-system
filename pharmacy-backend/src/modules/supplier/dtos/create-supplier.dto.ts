import { Exclude, Expose } from "class-transformer";
import { IsString } from "class-validator";

import { ApiProperty } from '@nestjs/swagger';

@Exclude()
export class CreateSupplierDto {
    @IsString()
    @Expose()
    @ApiProperty({
        type: String,
        description: 'Name of the supplier company'
    })
    readonly companyName: string;

    @IsString()
    @Expose()
    @ApiProperty({
        type: String, 
        description: 'Phone Number of the supplier company'
    })
    readonly phoneNumber: string;

    @IsString()
    @Expose()
    @ApiProperty({
        type: String, 
        description: 'Address of the supplier company'
    })
    readonly address: string;

    @IsString()
    @Expose()
    @ApiProperty({
        type: String, 
        description: 'City where the supplier company is located'
    })
    readonly city: string;

    @IsString()
    @Expose()
    @ApiProperty({
        type: String, 
        description: 'Country where the supplier company is located'
    })
    readonly region: string;

    @IsString()
    @Expose()
    @ApiProperty({
        type: String, 
        description: 'Postal Code of the city or region where the supplier company is located'
    })
    readonly postalCode: string;

    @IsString()
    @Expose()
    @ApiProperty({
        type: String, 
        description: 'Name of the contact person in charge of the supplier company'
    })
    readonly contactName: string;

    @IsString()
    @Expose()
    @ApiProperty({
        type: String, 
        description: 'Supplier company status. [ACTIVE, INACTIVE]'
    })
    readonly status?: string;

}