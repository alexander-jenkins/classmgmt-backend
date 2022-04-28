import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    OneToOne,
    JoinColumn,
} from 'typeorm';
import { Semester } from './semester.entity';
import { Course } from './course.entity';
import { Instructor } from './instructor.entity';

@Entity('Class')
export class Class {
    @PrimaryGeneratedColumn()
    class_id: number; // primary key

    @Column({ nullable: false })
    start_date: Date;

    @Column({ nullable: false })
    end_date: Date;

    @ManyToOne(() => Semester, (semester) => semester.classes)
    semester: Semester;

    @ManyToOne(() => Course, (course) => course.classes)
    course: Course;

    @OneToOne(() => Instructor, (instructor) => instructor.instructor_id)
    @JoinColumn()
    taught_by: Instructor;
}
