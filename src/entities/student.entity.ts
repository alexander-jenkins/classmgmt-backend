import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from 'typeorm';
import { User } from './user.entity';

@Entity('Student')
export class Student {
    @PrimaryGeneratedColumn()
    student_id: number;

    @OneToOne(() => User, (user) => user.student_profile)
    user: User;
}
