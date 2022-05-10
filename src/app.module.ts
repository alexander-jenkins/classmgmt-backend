import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { config } from './orm.config';
import { ClassesController } from './classes/classes.controller';
import { UserModule } from './modules/user/user.module';
import { CourseModule } from './modules/course/course.module';

@Module({
    imports: [TypeOrmModule.forRoot(config), UserModule, CourseModule],
    controllers: [AppController, ClassesController],
    providers: [AppService],
})
export class AppModule {}
