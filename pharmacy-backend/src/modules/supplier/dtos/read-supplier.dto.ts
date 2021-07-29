import { Exclude, Expose } from "class-transformer";
import { IsNumber, IsString } from "class-validator";

@Exclude()
export class ReadSupplierDto {
    @IsNumber()
    @Expose()
    readonly id: number;
    
    @IsString()
    @Expose()
    readonly companyName: string;

    @IsString()
    @Expose()
    readonly phoneNumber: string;

    @IsString()
    @Expose()
    readonly address: string;

    @IsString()
    @Expose()
    readonly city: string;

    @IsString()
    @Expose()
    readonly region: string;

    @IsString()
    @Expose()
    readonly postalCode: string;

    @IsString()
    @Expose()
    readonly contactName: string;
}