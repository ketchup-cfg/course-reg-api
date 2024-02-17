import { Controller, Get, Param } from '@nestjs/common';

type Course = {
  id: number;
  title: string;
  subject: string;
  courseNumber: string;
  creditHours: number;
  prereqs: Course[] | null;
};

@Controller('courses')
export class CoursesController {
  @Get(':id')
  getCourse(@Param('id') id: number): Course {
    return {
      id,
      title: 'Intro to Woodworking',
      subject: 'ART',
      courseNumber: '100',
      creditHours: 4.5,
      prereqs: null,
    };
  }
}
