import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Pool } from 'pg';
import { DatabaseService } from './database.service';

const databasePoolFactory = async (configService: ConfigService) => {
    return new Pool({
      user: configService.get('DB_USER'),
      host: configService.get('DB_HOST'),
      database: configService.get('DB_DATABASE'),
      password: configService.get('DB_PASSWORD'),
      port: configService.get('DB_PORT'),
    });
  };

@Module({
    providers: [
        {
            provide: 'DATABASE_POOL',
            inject: [ConfigService],
            useFactory: databasePoolFactory,
          },
          DatabaseService,
    ],
    exports: [DatabaseService],
})
export class DatabaseModule {}
