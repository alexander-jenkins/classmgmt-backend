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

  @OneToOne(() => Student)
  @JoinColumn()
  user_stuID: Student;

  @OneToOne(() => Instructor)
  @JoinColumn()
  user_instID: Instructor;

  @OneToOne(() => Admin)
  @JoinColumn()
  user_admID: Admin;
}
