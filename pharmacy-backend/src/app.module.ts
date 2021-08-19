import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Configuration } from './config/config.keys';
import { ConfigModule } from './config/config.module';
import { ConfigServices } from './config/config.services';
import { DatabaseModule } from './database/database.module';
import { CategoryModule } from './modules/category/category.module';
import { ProductModule } from './modules/product/product.module';
import { SupplierModule } from './modules/supplier/supplier.module';
import { LaboratoryModule } from './modules/laboratory/laboratory.module';
import { MedicineModule } from './modules/medicine/medicine.module';
import { BranchOfficeModule } from './modules/branch-office/branch-office.module';

@Module({
  imports: [
    ConfigModule,
    DatabaseModule,
    CategoryModule,
    ProductModule,
    SupplierModule,
    LaboratoryModule,
    MedicineModule,
    BranchOfficeModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  static port: number | string;

  constructor(private readonly _configService: ConfigServices) {
    AppModule.port = this._configService.get(Configuration.PORT);
  }
}
