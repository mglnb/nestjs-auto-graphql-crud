import { Module } from '@nestjs/common';
import { UserResolver } from './user.resolver';
import { NestjsQueryTypeOrmModule } from '@nestjs-query/query-typeorm';
import { UserEntity } from './user.entity';
import { UserService } from './user.service';

@Module({
  providers: [UserResolver, UserService],
  imports: [NestjsQueryTypeOrmModule.forFeature([UserEntity])],
})
export class UserModule {}
