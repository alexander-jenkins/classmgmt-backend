import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('Class')
export class Class {
    @PrimaryGeneratedColumn()
    class_id: number; // primary key

    @Column({ nullable: false })
    start_date: Date;

    @Column({ nullable: false })
    end_date: Date;
}
