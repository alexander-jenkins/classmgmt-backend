import { Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Student')
export class Student {
  @PrimaryGeneratedColumn()
  student_id: number;
}
