import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    OneToMany,
    ManyToMany,
} from 'typeorm';
import { Class } from './class.entity';
import { Instructor } from '../../user/entities/instructor.entity';

@Entity('Course')
export class Course {
    @PrimaryGeneratedColumn()
    course_id: number;

    @Column({ nullable: false })
    course_name: string;

    @Column({ nullable: true })
    course_description: string;

    @Column({ nullable: false })
    course_step: number;

    @Column({ nullable: true })
    course_duration: number; // in weeks

    @OneToMany(() => Class, (class_) => class_.course)
    classes: Class[];

    @ManyToMany(() => Instructor, (instructor) => instructor.can_teach)
    instructors: Instructor[];
}
