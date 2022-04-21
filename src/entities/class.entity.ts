import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { Course } from './course.entity';
import { Semester } from './semester.entity';

@Entity('Class')
export class Class {
  @PrimaryGeneratedColumn()
  class_id: number; // primary key

  @Column({ nullable: false })
  start_date: Date;

  @Column({ nullable: false })
  end_date: Date;

  @ManyToOne(() => Course, (course) => course.classes)
  course_id: number; // foreign key

  @OneToOne(() => Semester)
  @JoinColumn()
  class_sid: number; // foreign key
}
