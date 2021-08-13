import { Exclude, Expose } from 'class-transformer';
import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

@Exclude()
export class CreateCategoryDto {
  @IsString()
  @Expose()
  @ApiProperty({
    type: String,
    description: 'Name of the category of a product or medicine',
  })
  readonly name: string;
}
