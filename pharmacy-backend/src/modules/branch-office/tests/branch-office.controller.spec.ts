import { Test, TestingModule } from '@nestjs/testing';
import { BranchOfficeController } from '../branch-office.controller';

describe('BranchOfficeController', () => {
  let controller: BranchOfficeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BranchOfficeController],
    }).compile();

    controller = module.get<BranchOfficeController>(BranchOfficeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
