import {
    Entity,
    PrimaryGeneratedColumn,
    OneToOne,
    ManyToMany,
    JoinTable,
} from 'typeorm';
import { Course } from '../../course/entities/course.entity';
import { User } from './user.entity';

@Entity('Instructor')
export class Instructor {
    @PrimaryGeneratedColumn()
    instructor_id: number;

    @OneToOne(() => User, (user) => user.instructor_profile)
    user: User;

    @ManyToMany(() => Course, (course) => course.instructors)
    @JoinTable()
    can_teach: Course[];
}
