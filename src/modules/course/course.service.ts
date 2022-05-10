import { Injectable } from '@nestjs/common';

@Injectable()
export class CourseService {
    // constructor(private courseService: CourseService) {}

    getHello(): string {
        return 'Courses!';
    }

    async findAll(): Promise<string> {
        return await 'This action returns all courses';
    }
}
