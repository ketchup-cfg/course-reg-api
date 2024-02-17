import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { CoursesService } from './courses/courses.service';
import { PrismaService } from './prisma.service';
import { CoursesController } from './courses/courses.controller';

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [CoursesController],
  providers: [PrismaService, CoursesService],
})
export class AppModule {}
