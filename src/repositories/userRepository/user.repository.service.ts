import { Logger, Injectable, Inject } from '@nestjs/common';
import { BaseRepositoryService } from '../base/base.repository.service';
import {TYPES} from '../../common/enums/types'
@Injectable()
export class UserRepositoryService {
  private readonly logger = new Logger(UserRepositoryService.name);

  constructor(@Inject(TYPES.BASE_REPOSITORY_SERVICE) private baseRepositoryService: BaseRepositoryService) {}

  async findById(values:any): Promise<any[]> {
    const result = await this.baseRepositoryService.findById('user','*',values);
      return result;
  }

  async insert(): Promise<any[]> {
    const result = await this.baseRepositoryService.executeQuery(`INSERT INTO public.user("firstName","lastName","password","isAdmin","email","mobileNumber","isActive","createdAt","updatedAt") VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9) RETURNING *`,['Test','Test', 'password', true, 'password@ex.com', '9292929292', true, new Date(),new Date()])
      return result;
  }
}