import {
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
  Column,
} from 'typeorm';
import { Class } from './class.entity';
import { Student } from './student.entity';

@Entity('ClassStatus')
export class ClassStatus {
  @PrimaryGeneratedColumn()
  grade_id: number;

  @OneToOne(() => Class)
  @JoinColumn()
  class_id: Class;

  @Column({ nullable: false })
  status: string;
}
