import { Module } from '@nestjs/common';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';
import { DatabaseModule } from '../database/postgres/database.module';
import { UserRepositoryModule } from '../repositories/userRepository/user.repository.module';
@Module({
  imports: [UserRepositoryModule],
  controllers: [CatsController],
  providers: [CatsService],
})
export class CatsModule {}