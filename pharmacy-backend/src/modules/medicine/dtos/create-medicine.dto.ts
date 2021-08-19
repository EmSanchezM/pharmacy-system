import { ApiProperty } from "@nestjs/swagger";
import { Exclude, Expose, Type } from "class-transformer";
import { IsDate, IsNumber, IsString } from "class-validator";

@Exclude()
export class CreateMedicineDto {
    //property of products
    @IsString()
    @Expose()
    @ApiProperty({ type: String, description: 'Name of the medicine'})
    nameMedicine: string;

    @IsString()
    @Expose()
    @ApiProperty({ type: String, description: 'Description of the medicine'})
    description:string;

    @IsNumber()
    @Expose()
    @ApiProperty({ type: Number, description: 'Quantity per unit of the medicine'})
    quantityPerUnit:number;

    @IsNumber()
    @Expose()
    @ApiProperty({ type: Number, description: 'Unit price of the medicine'})
    unitPrice:number;

    @IsNumber()
    @Expose()
    @ApiProperty({ type: Number, description: 'Units in stock of the medicine'})
    unitsInStock:number;

    @IsDate()
    @Expose()
    @ApiProperty({
        type: Date,
        description: 'Expiration date of the product',
    })
    @Type(()=> Date)
    expirationDate: Date;

    @IsNumber()
    @Expose()
    @ApiProperty({ type: Number, description: 'category id of the product'})
    category: number;

    @IsNumber()
    @Expose()
    @ApiProperty({ type: Number, description: 'Supplier id of the product'})
    supplier:number;

    //property of medicine
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
    @ApiProperty({ type: String, description: 'Laboratory id of the medicine'})
    laboratory:number;

    //property shelf
    @IsNumber()
    @Expose()
    @ApiProperty({ type: Number, description: 'Shelf id of the product'})
    shelf:number;

    @IsString()
    @Expose()
    @ApiProperty({ type: String, description: 'Cubicle of the shelf'})
    cubicle: string;

}