import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common'; // أزلنا @Inject
import { createRes, findAllRes, PageService } from './page.service';
import { CreatePageDto } from './dtos/create-page.dto';
import mongoose, { ObjectId } from 'mongoose';



@Controller('pages')
export class PageController {
  constructor(private readonly pageService: PageService) { }

  @Get()
  findAll(@Query("name") name: string): Promise<findAllRes> {
    const filters = { ...(name && { name: { $regex: name, $options: 'i' } }) }
    return this.pageService.findAll(filters);
  }

  @Get(":id")
  findOne(@Param('id') id: ObjectId): Promise<createRes> {
    return this.pageService.findOne(id)
  }

  @Post()
  create(@Body() data: CreatePageDto): Promise<createRes> {
    return this.pageService.create(data);
  }
}
