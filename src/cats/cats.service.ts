import { Inject, Injectable } from '@nestjs/common';
import { UserRepositoryService } from '../repositories/userRepository/user.repository.service';
import {TYPES} from '../common/enums/types'
@Injectable()
export class CatsService {
  constructor(@Inject(TYPES.USER_REPOSITORY_SERVICE) private userRepositoryService: UserRepositoryService) {}

  async findById(id): Promise<any[]> {
    return this.userRepositoryService.findById([id])
  }

  async insert(): Promise<any[]> {
    return this.userRepositoryService.insert()
  }
}