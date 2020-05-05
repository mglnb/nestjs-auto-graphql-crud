import { Entity, PrimaryGeneratedColumn, Column, ManyToMany } from "typeorm";
import { UserEntity } from "../user.entity";


@Entity()
export class RoleEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @Column()
    displayName: string;

    @ManyToMany(_ => UserEntity)
    user: [UserEntity]
}