// page.module.ts
import { Module } from '@nestjs/common';
import { PageService } from './page.service';
import { MongooseModule } from '@nestjs/mongoose';
import { pageSchema } from './schemas/page.schema';
import { PageController } from './page.controller';
import { ProjectModule } from '../project/project.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'page', schema: pageSchema }]),
    ProjectModule,
  ],
  providers: [PageService],
  controllers: [PageController],
  exports: [PageService],
})
export class PageModule {}
