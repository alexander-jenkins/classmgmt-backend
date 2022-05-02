import {
    Column,
    Entity,
    JoinColumn,
    OneToOne,
    PrimaryGeneratedColumn,
} from 'typeorm';
import { Admin } from './admin.entity';
import { Instructor } from './instructor.entity';
import { Student } from './student.entity';

@Entity('User')
export class User {
    @PrimaryGeneratedColumn()
    user_id: number;

    @Column({ nullable: false })
    first_name: string;

    @Column({ nullable: false })
    last_name: string;

    @OneToOne(() => Student, (student) => student.user)
    @JoinColumn()
    student_profile: Student;

    @OneToOne(() => Instructor, (instructor) => instructor.user)
    @JoinColumn()
    instructor_profile: Instructor;

    @OneToOne(() => Admin, (admin) => admin.admin_id)
    @JoinColumn()
    admin_profile: Admin;
}
