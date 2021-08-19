import { Exclude, Expose } from "class-transformer";
import { IsNumber, IsString } from "class-validator";

@Exclude()
export class UpdateShelfDto {
    @IsString()
    @Expose()
    name?: string;

    @IsNumber()
    @Expose()
    branch_office_id?:number;
}