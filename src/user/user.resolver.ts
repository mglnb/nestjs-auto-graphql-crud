import { Resolver } from '@nestjs/graphql';
import { CRUDResolver } from '@nestjs-query/query-graphql';
import { UserDTO } from './user.input';
import { UserService } from './user.service';
import { RoleDTO } from './role/role.input';

@Resolver(() => UserDTO)
export class UserResolver extends CRUDResolver(UserDTO, {
    relations: {
        many: {role: {DTO: RoleDTO}}
    }
}) {
  constructor(
    readonly service: UserService,
  ) { super(service) }
}
