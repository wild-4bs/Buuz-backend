import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { page } from './schemas/page.schema';
import { AddProjectDto } from './dtos/add-project.dto';

@Injectable()
export class PageService {
  constructor(
    @InjectModel(page.name)
    private readonly pageModel: mongoose.Model<page>,
  ) {}

  async findAll(): Promise<{
    message: string;
    payload: page[];
    totalCount: number;
    count: number;
  }> {
    const [data, total] = await Promise.all([
      this.pageModel.find().populate('projects').exec(),
      this.pageModel.countDocuments().exec(),
    ]);
    const res = {
      message: 'Pages have been fetched successfully',
      payload: data,
      totalCount: total,
      count: data.length,
    };
    return res;
  }

  async create(data: page): Promise<{ message: string; payload: page }> {
    const createdPage = await this.pageModel.create(data);
    const res = {
      message: 'Page has been created successfully',
      payload: createdPage,
    };
    return res;
  }

  async addProjects(data: AddProjectDto) {
    data.projects.forEach((project) => {
      if (!mongoose.isValidObjectId(project)) {
        throw new BadRequestException(`${project} is not valid id!`);
      }
    });
    return 'Hello projects';
  }
}
