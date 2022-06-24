import { Module } from '@nestjs/common';
import { PostsController } from './posts.controller';
import { PostsService } from './posts.service';
import { TYPES } from '../../types';
import { SequelizeModule } from '@nestjs/sequelize';
import { PostModel } from './models/post.model';
@Module({
  imports:[SequelizeModule.forFeature([PostModel])],
  controllers: [PostsController],
  providers: [
    {provide:TYPES.PostService,useClass:PostsService}
  ],
  exports:[TYPES.PostService]
})
export class PostsModule {}