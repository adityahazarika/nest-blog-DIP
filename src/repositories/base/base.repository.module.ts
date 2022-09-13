import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../database/postgres/database.module';
import { BaseRepositoryService } from './base.repository.service';
import { TYPES } from '../../common/enums/types';
@Module({
  imports: [DatabaseModule],
  providers: [          {
    provide: TYPES.BASE_REPOSITORY_SERVICE,
    useClass: BaseRepositoryService,
  }],
  exports:[TYPES.BASE_REPOSITORY_SERVICE]
})
export class BaseRepositoryModule {}