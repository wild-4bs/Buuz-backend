import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PageController } from './page/page.controller';
import { PageModule } from './page/page.module';
import { ProjectController } from './project/project.controller';
import { ProjectModule } from './project/project.module';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { ValueController } from './value/value.controller';
import { ValueModule } from './value/value.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    MongooseModule.forRoot(process.env.DB_URI as string),
    PageModule,
    ProjectModule,
    ValueModule,
  ],
  controllers: [AppController, PageController, ProjectController, ValueController],
  providers: [AppService],
})
export class AppModule { }
