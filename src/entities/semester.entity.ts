import { Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Class } from './class.entity';

@Entity('Semester')
export class Semester {
    @PrimaryGeneratedColumn()
    semester_id: number;

    @OneToMany(() => Class, (class_) => class_.semester)
    classes: Class[];
}
