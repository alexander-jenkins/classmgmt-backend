import { Entity, ManyToMany, ManyToOne, PrimaryGeneratedColumn, JoinTable } from 'typeorm';
import { ClassStatus } from './classStatus.entity';

@Entity('Student')
export class Student {
  @PrimaryGeneratedColumn()
  student_id: number;

  @ManyToOne(() => ClassStatus)
  @JoinTable()
  grades: ClassStatus[];
}
