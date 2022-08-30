import { Logger, Injectable, Inject } from '@nestjs/common';
import { Pool, QueryResult } from 'pg';
import {TYPES} from '../../../common/enums/types'
@Injectable()
export class DatabaseService {
  private readonly logger = new Logger(DatabaseService.name);

  constructor(@Inject(TYPES.DATABASE_POOL) private pool: Pool) {}

  async executeQuery(queryText: string, values: any[] = []): Promise<any[]> {
    this.logger.debug(`Executing query: ${queryText} (${values})`);
    const result = await this.pool.query(queryText, values);
      this.logger.debug(`Executed query, result size ${result.rows.length}`);
      return result.rows;
  }
}