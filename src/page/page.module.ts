// page.module.ts
import { Module } from '@nestjs/common';
import { PageService } from './page.service';
import { MongooseModule } from '@nestjs/mongoose';
import { page, pageSchema } from './schemas/page.schema';
import { PageController } from './page.controller';
import { ProjectModule } from '../project/project.module';
import { ValueModule } from 'src/value/value.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: page.name, schema: pageSchema }]),
  ],
  providers: [PageService],
  controllers: [PageController],
  exports: [PageService],
})
export class PageModule { }
