import {
    Entity,
    ManyToOne,
    OneToOne,
    PrimaryGeneratedColumn,
    JoinColumn,
    Column,
} from 'typeorm';
import { Class } from './class.entity';
import { Student } from '../../user/entities/student.entity';

@Entity('ClassStatus')
export class ClassStatus {
    @PrimaryGeneratedColumn()
    class_status_id: number;

    @ManyToOne(() => Student, (student) => student.class_statuses)
    student: Student;

    @OneToOne(() => Class, (class_) => class_.class_id)
    @JoinColumn()
    class: Class;

    @Column()
    status: string;
}
