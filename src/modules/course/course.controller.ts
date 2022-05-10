import { Controller, Get } from '@nestjs/common';
import { CourseService } from './course.service';
import { Course } from './entities/course.entity';

@Controller('course')
export class CourseController {
    constructor(private courseService: CourseService) {}

    @Get('/')
    getHello(): string {
        return this.courseService.getHello();
    }

    @Get('/findAll')
    async findAll(): Promise<Course[]> {
        return await this.courseService.findAll();
    }
}
