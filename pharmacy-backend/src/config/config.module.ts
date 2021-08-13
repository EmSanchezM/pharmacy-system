import { Module } from '@nestjs/common';
import { ConfigServices } from './config.services';

@Module({
  providers: [
    {
      provide: ConfigServices,
      useValue: new ConfigServices(),
    },
  ],
  exports: [ConfigServices],
})
export class ConfigModule {}
