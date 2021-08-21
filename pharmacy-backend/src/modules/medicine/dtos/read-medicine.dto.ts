import { ApiProperty } from "@nestjs/swagger";
import { Exclude, Expose, Type } from "class-transformer";
import { IsNumber, IsString } from "class-validator";
import { ReadShelfDto } from "src/modules/branch-office/dtos/read-shelf.dto";
import { ReadLaboratoryDto } from "src/modules/laboratory/dtos";
import { ReadProductDto } from "src/modules/product/dtos/read-product.dto";

@Exclude()
export class ReadMedicineDto {
    @IsNumber()
    @Expose()
    @ApiProperty({
        type: Number,
        description: 'Medicine ID',
    })
    readonly id: number;

    @IsString()
    @Expose()
    @ApiProperty({
        type: String,
        description: 'Indications of the medicine',
    })
    readonly indications: string;

    @IsString()
    @Expose()
    @ApiProperty({
        type: String,
        description: 'Actions of the medicine',
    })
    readonly actions: string;

    @IsString()
    @Expose()
    @ApiProperty({
        type: String,
        description: 'Dose of the medicine',
    })
    readonly dose: string;

    @IsString()
    @Expose()
    @ApiProperty({
        type: String,
        description: 'Administration Route of the medicine (Oral, Injectables,Nasal etc)',
    })
    readonly administrationRoute: string;

    @Expose()
    @ApiProperty({ type: Number, description: 'Laboratory of medicine' })
    @Type(type => ReadLaboratoryDto)
    readonly laboratory: ReadLaboratoryDto;

    @Expose()
    @ApiProperty({ type: Number, description: 'Details of medicine' })
    @Type(type => ReadProductDto)
    readonly product: ReadProductDto;

    @Expose()
    @ApiProperty({ type: Number, description: 'Shelf of medicine' })
    @Type(type => ReadShelfDto)
    readonly shelf: ReadShelfDto;

}
