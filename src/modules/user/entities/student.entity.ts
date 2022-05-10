import {
    Entity,
    PrimaryGeneratedColumn,
    OneToOne,
    OneToMany,
    JoinColumn,
} from 'typeorm';
import { User } from './user.entity';
import { ClassStatus } from './class_status.entity';

@Entity('Student')
export class Student {
    @PrimaryGeneratedColumn()
    student_id: number;

    @OneToOne(() => User, (user) => user.student_profile)
    user: User;

    @OneToMany(() => ClassStatus, (class_status) => class_status.student)
    @JoinColumn()
    class_statuses: ClassStatus[];
}
