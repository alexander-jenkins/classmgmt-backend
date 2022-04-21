import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Class } from './class.entity';

@Entity('Course')
export class Course {
  @PrimaryGeneratedColumn()
  course_id: number;

  @Column({ nullable: false })
  course_name: string;

  @Column({ nullable: true })
  course_description: string;

  @OneToMany(() => Class, (classs) => classs.course_id)
  classes: Class;
}
