import { Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Semester')
export class Semester {
  @PrimaryGeneratedColumn()
  semester_id: number;
}
