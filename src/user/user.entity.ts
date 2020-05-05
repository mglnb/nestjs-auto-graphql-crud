import { PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, Entity, ManyToMany, JoinTable } from "typeorm";
import { RoleEntity } from "./role/role.entity";

@Entity()
export class UserEntity {
    @PrimaryGeneratedColumn('uuid')
    id!: number;

    @Column()
    name!: string;

    @Column()
    password!: string;

    @ManyToMany(_ => RoleEntity, {cascade: true})
    @JoinTable()
    role: [RoleEntity];

    @Column()
    phone: string;

    @Column()
    avatar: string;

    @Column()
    address: string;

    @CreateDateColumn()
    createdAt!: Date;
  
    @UpdateDateColumn()
    updatedAt!: Date;
}
