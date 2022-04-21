import { Entity, PrimaryGeneratedColumn } from 'typeorm';
import { User } from './user.entity';

@Entity('Student')
export class Student extends User {
  @PrimaryGeneratedColumn()
  student_id: number;
}
