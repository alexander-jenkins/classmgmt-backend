import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

@Entity('Course')
export class Course {
  @PrimaryGeneratedColumn()
  course_id: number;

  @Column({ nullable: false })
  course_name: string;

  @Column({ nullable: true })
  course_description: string;
}
