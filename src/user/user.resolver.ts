import { Resolver } from '@nestjs/graphql';
import { CRUDResolver } from '@nestjs-query/query-graphql';
import { User } from './user.input';
import { UserService } from './user.service';

@Resolver(() => User)
export class UserResolver extends CRUDResolver(User) {
  constructor(
    readonly service: UserService,
  ) { super(service) }
}
