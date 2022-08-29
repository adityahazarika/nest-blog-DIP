import { Inject, Injectable } from '@nestjs/common';
import { DatabaseService } from '../config/database/postgres/database.service';

@Injectable()
export class CatsService {
  constructor(private databaseService:DatabaseService) {}

  async findAll(): Promise<any[]> {
    return this.databaseService.executeQuery('SELECT * FROM users WHERE id = $1', [1])
  }
}
