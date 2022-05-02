import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    OneToMany,
    ManyToMany,
} from 'typeorm';
import { Class } from './class.entity';
import { Instructor } from './instructor.entity';

@Entity('Course')
export class Course {
    @PrimaryGeneratedColumn()
    course_id: number;

    @Column({ nullable: false })
    course_name: string;

    @Column({ nullable: true })
    course_description: string;

    @OneToMany(() => Class, (class_) => class_.course)
    classes: Class[];

    @ManyToMany(() => Instructor, (instructor) => instructor.can_teach)
    instructors: Instructor[];
}
