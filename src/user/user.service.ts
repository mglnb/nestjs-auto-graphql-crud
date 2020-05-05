import { Injectable } from '@nestjs/common';
import { QueryService } from '@nestjs-query/core';
import { UserEntity } from './user.entity';
import { TypeOrmQueryService } from '@nestjs-query/query-typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@QueryService(UserEntity)
export class UserService extends TypeOrmQueryService<UserEntity> {
  constructor(@InjectRepository(UserEntity) repo: Repository<UserEntity>) {
    super(repo, { useSoftDelete: true });
  }
}
