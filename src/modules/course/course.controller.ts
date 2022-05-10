import { Controller, Get } from '@nestjs/common';
import { CourseService } from './course.service';

@Controller('course')
export class CourseController {
    constructor(private courseService: CourseService) {}

    @Get('/')
    getHello(): string {
        return this.courseService.getHello();
    }

    @Get('/findAll')
    findAll(): Promise<string> {
        return await this.courseService.findAll();
    }
}
