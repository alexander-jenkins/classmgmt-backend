import { Entity, PrimaryGeneratedColumn, OneToOne } from 'typeorm';
import { User } from './user.entity';

@Entity('Instructor')
export class Instructor {
    @PrimaryGeneratedColumn()
    instructor_id: number;

    @OneToOne(() => User, (user) => user.instructor_profile)
    user: User;
}
