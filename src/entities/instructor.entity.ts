import { Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Course } from './course.entity';

@Entity('Instructor')
export class Instructor {
  @PrimaryGeneratedColumn()
  instructor_id: number;

  @ManyToMany(() => Course)
  @JoinTable()
  can_teach: Course[];
}
