import { Body, Controller, Delete, Get, Inject, Param } from '@nestjs/common';
import { PostModel } from './models/post.model';
import { PostsServiceInterface } from '../../interfaces/postService.interface';
import { TYPES } from '../../types';

@Controller('posts')
export class PostsController {
    constructor(@Inject(TYPES.PostService) private readonly postsService:PostsServiceInterface){}
    @Get()
    findAll(): Promise<PostModel[]> {
      return this.postsService.findAll();
    }
}