import { Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Admin')
export class Admin {
  @PrimaryGeneratedColumn()
  admin_id: number;
}
