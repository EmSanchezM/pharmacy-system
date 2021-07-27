import { Exclude, Expose } from "class-transformer";
import { IsString } from "class-validator";

@Exclude()
export class CreateCategoryDto {
    @IsString()
    @Expose()
    readonly name: string;
}