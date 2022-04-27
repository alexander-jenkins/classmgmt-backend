import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Semester } from './semester.entity';
import { Course } from './course.entity';

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
}
