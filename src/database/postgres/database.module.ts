import { Logger, Module, OnApplicationShutdown } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Pool } from 'pg';
import { DatabaseService } from './database.service';
import { TYPES } from '../../common/enums/types'; 
import { ModuleRef } from '@nestjs/core';

const databasePoolFactory = async (configService: ConfigService) => {
    const pool = new Pool({
      user: configService.get('DB_USER'),
      host: configService.get('DB_HOST'),
      database: configService.get('DB_DATABASE'),
      password: configService.get('DB_PASSWORD'),
      port: configService.get('DB_PORT'),
      idleTimeoutMillis: 30000
    });
    pool.on('connect', client => {
        console.log("new client connected")
    })
    pool.query('SELECT NOW()', (err, cl) => {
        console.log(cl.rows)
    })
    pool.on('error', (err, client) => {
        console.log("Database error")
    })
    pool.on('remove', (client) => {
        console.log("Database connection removed")
    })
    return pool
  };

@Module({
    providers: [
        {
            provide: TYPES.DATABASE_POOL,
            inject: [ConfigService],
            useFactory: databasePoolFactory,
          },
          {
            provide: TYPES.DATABASE_SERVICE,
            useClass: DatabaseService,
          }
    ],
    exports: [TYPES.DATABASE_POOL],
})
export class DatabaseModule implements OnApplicationShutdown {
  private readonly logger = new Logger(DatabaseModule.name);

  constructor(private readonly moduleRef: ModuleRef) {}

  onApplicationShutdown(signal?: string): any {
    this.logger.log(`Shutting down on signal ${signal}`);
    const pool = this.moduleRef.get(TYPES.DATABASE_POOL) as Pool;
    return pool.end();
  }
}