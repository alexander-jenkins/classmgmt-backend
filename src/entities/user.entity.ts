import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('User')
export abstract class User {
  @PrimaryGeneratedColumn()
  user_id: number;

  @Column()
  first_name: string;

  @Column()
  last_name: string;
}
