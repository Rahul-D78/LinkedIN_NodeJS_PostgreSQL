import { Column, Entity, JoinTable, ManyToMany, PrimaryColumn } from "typeorm";
import { Skill } from "./skills.entity";

@Entity('users')
export class User {
    @PrimaryColumn()
    email: string

    @Column({type: 'text', nullable: false})
    name: string

    @Column({type: 'text', nullable: false})
    password: string

    @ManyToMany(() => Skill)
    @JoinTable()
    skills: Skill[];
}