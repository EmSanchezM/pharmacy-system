import { Exclude, Expose } from "class-transformer";
import { IsString } from "class-validator";

@Exclude()
export class UpdateBranchOfficeDto {
    @IsString()
    @Expose()
    name?: string;

    @IsString()
    @Expose()
    phoneNumber?: string;

    @IsString()
    @Expose()
    address?: string;

    @IsString()
    @Expose()
    status?: string;
}