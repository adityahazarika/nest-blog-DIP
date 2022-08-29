import { Module } from '@nestjs/common';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';
import { DatabaseModule } from '../config/database/postgres/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [CatsController],
  providers: [CatsService],
})
export class CatsModule {}