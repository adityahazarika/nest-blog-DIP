import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { TYPES } from 'src/types';
import { PostsModule } from '../posts/posts.module';
import { User } from './models/user.model';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

@Module({
  imports: [SequelizeModule.forFeature([User]),PostsModule],
  providers: [{
    provide:TYPES.UserService,useClass:UsersService
  }],
  controllers: [UsersController],
})
export class UsersModule {}