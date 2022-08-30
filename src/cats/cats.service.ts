import { Inject, Injectable } from '@nestjs/common';
import { DatabaseService } from '../config/database/postgres/database.service';
import {TYPES} from '../common/enums/types'
@Injectable()
export class CatsService {
  constructor(@Inject(TYPES.DATABASE_SERVICE) private databaseService: DatabaseService) {}

  async findAll(): Promise<any[]> {
    return this.databaseService.executeQuery('SELECT * FROM users WHERE id = $1', [1])
  }
}