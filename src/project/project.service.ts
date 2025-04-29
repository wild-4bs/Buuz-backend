import { Inject, Injectable } from '@nestjs/common';
import { project } from './schemas/project.schema';
import mongoose from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

export interface getProjectRes {
  message: string;
  payload: project[];
  count: number;
  totalCount: number;
}

export interface createProjectRes {
  message: string;
  project: project;
}

@Injectable()
export class ProjectService {
  constructor(
    @InjectModel(project.name) private projectModel: mongoose.Model<project>,
  ) {}

  async findAll(): Promise<getProjectRes> {
    const [data, total] = await Promise.all([
      this.projectModel.find().exec(),
      this.projectModel.countDocuments().exec(),
    ]);
    const res = {
      message: 'Projects have been fetched successfully',
      payload: data,
      count: data.length,
      totalCount: total,
    };
    return res;
  }
  async create(data: project): Promise<createProjectRes> {
    const projectData = await this.projectModel.create(data);
    const res = {
      message: 'Project created successfully.',
      project: projectData,
    };
    return res;
  }
}
