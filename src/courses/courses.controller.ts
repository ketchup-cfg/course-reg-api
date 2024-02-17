import { Controller, Get, Post, Delete, Param, Body } from '@nestjs/common';
import { CoursesService } from './courses.service';
import { Course as CourseModel } from '@prisma/client';

@Controller('courses')
export class CoursesController {
  constructor(private readonly coursesService: CoursesService) {}

  @Get(':id')
  async getCourseById(@Param('id') id: string): Promise<CourseModel> {
    return this.coursesService.course({ id: Number(id) });
  }

  @Post()
  async createCourse(
    @Body()
    courseData: {
      title: string;
      subject: string;
      courseNumber: string;
      creditHours: number;
    },
  ): Promise<CourseModel> {
    const { title, subject, courseNumber, creditHours } = courseData;
    return this.coursesService.createCourse({
      title,
      subject,
      courseNumber,
      creditHours,
    });
  }

  @Delete(':id')
  async deleteCourse(@Param(':id') id: string): Promise<CourseModel> {
    return this.coursesService.deletePost({ id: Number(id) });
  }
}
