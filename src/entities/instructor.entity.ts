import { Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Instructor')
export class Instructor {
  @PrimaryGeneratedColumn()
  instructor_id: number;
}
