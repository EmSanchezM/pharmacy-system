import { ApiProperty } from "@nestjs/swagger";
import { Exclude, Expose } from "class-transformer";
import { IsNumber, IsString } from "class-validator";

@Exclude()
export class UpdateMedicineDto {

    @IsString()
    @Expose()
    @ApiProperty({ type: String, description: 'Indications of the medicine'})
    indications: string;
    
    @IsString()
    @Expose()
    @ApiProperty({ type: String, description: 'Actions of the medicine'})
    actions: string;

    @IsString()
    @Expose()
    @ApiProperty({ type: String, description: 'Dose of the medicine'})
    dose: string;
    
    @IsString()
    @Expose()
    @ApiProperty({ type: String, description: 'Administration route of the medicine'})
    administrationRoute:string;

    @IsNumber()
    @Expose()
    @ApiProperty({ type: Number, description: 'Product Id, Details of the medicine'})
    product_id: number;

    @IsNumber()
    @Expose()
    @ApiProperty({ type: Number, description: 'Laboratory Id, Supplier of the medicine'})
    laboratory_id: number;
    
}