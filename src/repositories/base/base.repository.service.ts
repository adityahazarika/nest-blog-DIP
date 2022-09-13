import { Logger, Injectable, Inject } from '@nestjs/common';
import { Pool, QueryResult } from 'pg';
import {TYPES} from '../../common/enums/types'
@Injectable()
export class BaseRepositoryService {
  private readonly logger = new Logger(BaseRepositoryService.name);

  constructor(@Inject(TYPES.DATABASE_POOL) private pool: Pool) {}

  async findById(tablename:string,columns:any,values:any): Promise<any[]> {
    const result = await this.executeQuery(`SELECT ${columns} FROM public.${tablename} WHERE id = $1`, values);
      return result;
  }

  // async insert(tablename:string,columns:any,values:any): Promise<any[]> {
  //   this.logger.debug(`insert into ${tablename}()`);
  //   const result = await this.pool.query(`SELECT ${columns} FROM ${tablename} WHERE id = $1`, values);
  //     this.logger.debug(`Executed query, result size ${result.rows.length}`);
  //     return result.rows;
  // }

  async executeQuery(queryText: string, values: any[] = []): Promise<any[]> {
    this.logger.debug(`Executing query: ${queryText} (${values})`);
    const result = await this.pool.query(queryText, values);
      this.logger.debug(`Executed query, result size ${result.rows.length}`);
      return result.rows;
  }
}