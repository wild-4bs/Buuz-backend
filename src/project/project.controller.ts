import { Body, Controller, Get, Post } from '@nestjs/common';
import {
  createProjectRes,
  getProjectRes,
  ProjectService,
} from './project.service';
import { CreateProjectDto } from './dtos/create-project.dt';

@Controller('projects')
export class ProjectController {
  constructor(private readonly projectService: ProjectService) {}
  @Get()
  findAll(): Promise<getProjectRes> {
    return this.projectService.findAll();
  }
  @Post()
  async create(@Body() project: CreateProjectDto): Promise<createProjectRes> {
    return await this.projectService.create(project);
  }
}
