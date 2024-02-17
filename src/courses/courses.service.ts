import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Course, Prisma } from '@prisma/client';

@Injectable()
export class CoursesService {
  constructor(private prisma: PrismaService) {}

  async course(
    courseWhereUniqueInput: Prisma.CourseWhereUniqueInput,
  ): Promise<Course | null> {
    return this.prisma.course.findUnique({
      where: courseWhereUniqueInput,
    });
  }

  async courses(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.CourseWhereUniqueInput;
    where?: Prisma.CourseWhereInput;
    orderBy?: Prisma.CourseOrderByWithRelationInput;
  }): Promise<Course[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.course.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async createCourse(data: Prisma.CourseCreateInput): Promise<Course> {
    return this.prisma.course.create({
      data,
    });
  }

  async updatePost(params: {
    where: Prisma.CourseWhereUniqueInput;
    data: Prisma.CourseUpdateInput;
  }): Promise<Course> {
    const { data, where } = params;
    return this.prisma.course.update({
      data,
      where,
    });
  }

  async deletePost(where: Prisma.CourseWhereUniqueInput): Promise<Course> {
    return this.prisma.course.delete({
      where,
    });
  }
}
