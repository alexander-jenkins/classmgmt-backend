import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Course } from './entities/course.entity';

@Injectable()
export class CourseService {
    constructor(
        @InjectRepository(Course)
        private readonly courseRepository: Repository<Course>,
    ) {}

    getHello(): string {
        return 'Courses!';
    }

    async findAll(): Promise<Course[]> {
        return await this.courseRepository.find({
            select: ['course_id', 'course_name', 'course_description'],
        });
    }
}
