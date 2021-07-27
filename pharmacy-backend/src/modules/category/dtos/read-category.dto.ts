import { Exclude, Expose } from "class-transformer";
import { IsNumber, IsString } from "class-validator";

@Exclude()
export class ReadCategoryDto {
    @IsNumber()
    @Expose()
    readonly id: number;
    
    @IsString()
    @Expose()
    readonly name: string;
}