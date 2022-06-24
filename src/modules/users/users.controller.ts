import { Body, Controller, Delete, Get, Inject, Param, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './models/user.model';
import {TYPES} from '../../types'
import { UserServiceInterface } from '../../interfaces/usersService.interface';
import { PostsServiceInterface } from '../../interfaces/postService.interface';
import { CreatePostDto } from '../posts/dto/create-post.dto';

@Controller('users')
export class UsersController {
  constructor(@Inject(TYPES.UserService) private readonly usersService: UserServiceInterface, @Inject(TYPES.PostService) private readonly postsService: PostsServiceInterface
  ) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto): Promise<User> {
    return this.usersService.create(createUserDto);
  }

  @Get()
  findAll(): Promise<User[]> {
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<User> {
    return this.usersService.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.usersService.delete(id);
  }

  @Get("/post/:id")
  findAllPosts(@Param('id') id:string): Promise<any> {
    return this.postsService.find(id)
  }

  @Post("/post/:id")
  createPost (@Body() createPostDto: CreatePostDto,@Param('id') id:string): Promise<any> {
    return this.postsService.create(createPostDto,id)
  }
}
