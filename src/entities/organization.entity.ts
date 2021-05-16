import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Organization {
    @PrimaryGeneratedColumn()
    id: number

    @Column({type: 'text', nullable: false})
    name: string

    @Column({type: 'date'})
    startYear: Date

    @Column({type: 'date'})
    endYear: Date
}