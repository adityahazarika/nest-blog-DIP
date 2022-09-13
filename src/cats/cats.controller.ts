import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CatsService } from './cats.service';

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}
  @Get(':id')
  async findById(@Param() params): Promise<any[]> {
    return this.catsService.findById(params.id);
  }
  @Post()
  async insert(): Promise<any[]> {
    return this.catsService.insert();
  }
}
