import { UserEntity } from "../user.entity";
import { ObjectType, ID } from "@nestjs/graphql";
import { FilterableField } from '@nestjs-query/query-graphql';
import { RoleEntity } from "./role.entity";


@ObjectType('Role')
export class RoleDTO implements Partial<RoleEntity> {
    @FilterableField(() => ID)
    id: string;

    @FilterableField()
    name: string;

    @FilterableField()
    displayName: string;
}