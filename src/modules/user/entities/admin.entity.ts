import { Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from './user.entity';

@Entity('Admin')
export class Admin {
    @PrimaryGeneratedColumn()
    admin_id: number;

    @OneToOne(() => User, (user) => user.admin_profile)
    user: User;
}
