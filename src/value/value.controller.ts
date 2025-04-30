import { Body, Controller, Get, Post } from '@nestjs/common';
import { findAllRes, ValueService } from './value.service';
import { CreateValueDto } from './dto/create-value.dto';

@Controller('values')
export class ValueController {
    constructor(
        private readonly valueService: ValueService
    ) { }

    @Get()
    findAll(): Promise<findAllRes> {
        return this.valueService.findAll()
    }
    @Post()
    create(@Body() valueData: CreateValueDto) {
        return this.valueService.create(valueData)
    }
}
