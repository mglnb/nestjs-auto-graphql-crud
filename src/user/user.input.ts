import { InputType, ObjectType, Int, Field, GraphQLISODateTime, ID } from '@nestjs/graphql';
import { FilterableField } from '@nestjs-query/query-graphql';
import { UserEntity } from './user.entity';

@ObjectType('User')
export class UserDTO  implements Partial<UserEntity> {
  @FilterableField(() => ID)
  id!: number;

  @FilterableField()
  name!: string;

  password!: string;

  @FilterableField()
  role: string;

  @FilterableField()
  phone: string;

  @Field()
  avatar: string;

  @FilterableField()
  address: string;

  @Field(() => GraphQLISODateTime)
  createdAt!: Date;

  @Field(() => GraphQLISODateTime)
  updatedAt!: Date;
}
