import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiBody, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateMedicineDto } from './dtos/create-medicine.dto';
import { ReadMedicineDto } from './dtos/read-medicine.dto';
import { UpdateMedicineDto } from './dtos/update-medicine.dto';
import { MedicineService } from './medicine.service';

@Controller('medicines')
@ApiTags('Medicine')
export class MedicineController {
  constructor(private readonly _medicineService: MedicineService) { }

  @Get(':id')
  @ApiParam({
    type: Number,
    name: 'id',
    description: 'Medicine Id to get a medicine',
  })
  @ApiResponse({
    status: 200,
    description: 'Show a medicines',
  })
  async findOneMedicine(@Param('id') id: number): Promise<ReadMedicineDto> {
    const medicine = await this._medicineService.findOne(id);
    return medicine;
  }

  @Get()
  @ApiResponse({
    status: 200,
    description: 'Shows all medicines',
  })
  async findAllMedicines(): Promise<ReadMedicineDto[]> {
    const medicines = await this._medicineService.findAll();
    return medicines;
  }

  @Post()
  @ApiBody({ type: [CreateMedicineDto] })
  @ApiResponse({
    status: 201,
    description: 'The record has been successfully created.',
  })
  async createMedicine(
    @Body() medicine: CreateMedicineDto,
  ): Promise<ReadMedicineDto> {
    const createdProduct = this._medicineService.create(medicine);
    return createdProduct;
  }

  @Put(':id')
  @ApiParam({
    type: Number,
    name: 'id',
    description: 'Medicine Id to update a medicine',
  })
  @ApiResponse({
    status: 200,
    description: 'The record has been successfully updated.',
  })
  async updateMedicine(
    @Param('id') id: number,
    @Body() medicine: UpdateMedicineDto,
  ): Promise<ReadMedicineDto> {
    const updatedMedicine = await this._medicineService.update(id, medicine);
    return updatedMedicine;
  }

  @Delete(':id')
  @ApiParam({
    name: 'id',
    description: 'Medicine Id to delete a medicine',
  })
  @ApiResponse({
    status: 200,
    description: 'Removed the medicine',
  })
  async deleteMedicine(@Param('id') id: number) {
    await this._medicineService.delete(id);
    return true;
  }

}
