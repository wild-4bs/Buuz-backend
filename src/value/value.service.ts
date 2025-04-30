import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { Value } from './schema/value.schema';
import mongoose, { isValidObjectId, ObjectId, Types } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { page } from 'src/page/schemas/page.schema';
import { CreateValueDto } from './dto/create-value.dto';

export interface findAllRes {
    message: string;
    payload: Value[]
}

@Injectable()
export class ValueService {
    constructor(
        @InjectModel(Value.name) private valueModel = mongoose.Model<Value>,
        @InjectModel(page.name) private pageModel = mongoose.Model<page>
    ) { }
    async findAll(): Promise<findAllRes> {
        const values = await this.valueModel.find()
        return {
            message: "Values have been fetched successfully.",
            payload: values
        }
    }

    async findOne(id: ObjectId) {
        if (!isValidObjectId(id)) throw new BadRequestException("Value id is not valid please try a valid id.")
        const value = await this.valueModel.findById(id)
        if (!value) throw new NotFoundException("Value is not found.")
        return {
            message: "Value have been fetched successfully",
            payload: value
        }
    }
    async create(valueData: Value) {
        if (valueData.page && !isValidObjectId(valueData.page)) throw new BadRequestException("Page id is not valid, please try again with valid page id.")
        const page = await this.pageModel.findById(valueData.page)
        if (valueData.page && !page) throw new NotFoundException("Page is not found.")
        const value = await this.valueModel.create(valueData.page ? { ...valueData, page: new Types.ObjectId(valueData.page) } : valueData)
        return {
            message: "Value have been created successfully",
            payload: value
        }
    }
}
