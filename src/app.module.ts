import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ConfigModule } from '@nestjs/config';
import { CatsModule } from './cats/cats.module';
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true
    }),
    CatsModule
  ],
})
export class AppModule {}