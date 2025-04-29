import { Body, Controller, Get, Post } from '@nestjs/common'; // أزلنا @Inject
import { PageService } from './page.service';
import { page } from './schemas/page.schema';
import { CreatePageDto } from './dtos/create-page.dto';
import { AddProjectDto } from './dtos/add-project.dto';

@Controller('pages')
export class PageController {
  constructor(private readonly pageService: PageService) {}

  @Get()
  findAll(): Promise<{
    message: string;
    payload: page[];
    totalCount: number;
    count: number;
  }> {
    return this.pageService.findAll();
  }

  @Post()
  create(
    @Body() data: CreatePageDto,
  ): Promise<{ message: string; payload: page }> {
    return this.pageService.create(data);
  }
  @Post('projects')
  createProject(@Body() body: AddProjectDto) {
    return this.pageService.addProjects(body);
  }
}
