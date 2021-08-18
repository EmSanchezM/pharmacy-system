import { Exclude, Expose } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

@Exclude()
export class UpdateProductDto {
  @IsString()
  @Expose()
  @ApiProperty({ type: String, description: 'Name of the product' })
  name?: string;

  @IsString()
  @Expose()
  @ApiProperty({ type: String, description: 'Description of the product' })
  description?: string;

  @IsNumber()
  @Expose()
  @ApiProperty({
    type: Number,
    description: 'Quantity per unit of the product',
  })
  quantityPerUnit?: number;

  @IsNumber()
  @Expose()
  @ApiProperty({ type: Number, description: 'Price per unit of the product' })
  unitPrice?: number;

  @IsNumber()
  @Expose()
  @ApiProperty({ type: Number, description: 'units in stock of the product' })
  unitsInStock?: number;

  @IsNumber()
  @Expose()
  @ApiProperty({ type: Number, description: 'Category Id of the product' })
  category_id?: number;

  @IsNumber()
  @Expose()
  @ApiProperty({ type: Number, description: 'Supplier Id of the product' })
  supplier_id?: number;
}
