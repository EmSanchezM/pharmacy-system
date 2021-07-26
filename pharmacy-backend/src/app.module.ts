import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Configuration } from './config/config.keys';
import { ConfigModule } from './config/config.module';
import { ConfigServices } from './config/config.services';
import { DatabaseModule } from './database/database.module';
import { CategoryModule } from './modules/category/category.module';

@Module({
  imports: [ConfigModule, DatabaseModule, CategoryModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  static port: number | string;

  constructor(private readonly _configService: ConfigServices){
    AppModule.port = this._configService.get(Configuration.PORT)
  }
}
