import { Module } from '@nestjs/common';
import { BaseRepositoryModule } from '../base/base.repository.module';
import { TYPES } from '../../common/enums/types';
import { UserRepositoryService } from './user.repository.service';
@Module({
  imports: [BaseRepositoryModule],
  providers: [          {
    provide: TYPES.USER_REPOSITORY_SERVICE,
    useClass: UserRepositoryService,
  }],
  exports:[TYPES.USER_REPOSITORY_SERVICE]
})
export class UserRepositoryModule {}