import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import {
  createProjectRes,
  getProjectRes,
  ProjectService,
} from './project.service';
import { CreateProjectDto } from './dtos/create-project.dt';
import { ObjectId } from 'mongoose';
import { UpdateProjectDto } from './dtos/update-project.dto';

@Controller('projects')
export class ProjectController {
  constructor(private readonly projectService: ProjectService) { }
  @Get()
  findAll(): Promise<getProjectRes> {
    return this.projectService.findAll();
  }
  @Get(':id')
  findOne(@Param('id') id: ObjectId) {
    return this.projectService.findOne(id);
  }
  @Post()
  async create(@Body() project: CreateProjectDto): Promise<createProjectRes> {
    return await this.projectService.create(project);
  }
  @Delete(':id')
  deleteProject(@Param('id') id: ObjectId) {
    return this.projectService.deleteProject(id)
  }
  @Delete()
  deleteAllProjects() {
    return this.projectService.deleteAllProjects()
  }

  @Put(':id')
  updateProject(@Param('id') id: ObjectId, @Body() body: UpdateProjectDto) {
    return this.projectService.updateProject(id, body)
  }
}
