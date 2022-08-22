import { Injectable } from '@nestjs/common';
import { CreateUserDto } from 'src/users/user.dto';
import { AuthenticationEntity } from 'src/authentication/authentication.entity';
import { QueryRunner } from 'typeorm';
import { UserEntity } from './user.entity';
import { UserRepository } from './user.repository';
import {Post} from "../posts/post.entity";

@Injectable()
export class UserService {
  constructor(private readonly _userRepository: UserRepository) {}

  getAll(): Promise<UserEntity[]> {
    return this._userRepository.find();
  }

  async createUser(
    createUserDto: CreateUserDto,
    authentication: AuthenticationEntity,
    queryRunner: QueryRunner,
  ): Promise<UserEntity> {
    const user = this._userRepository.create({
      ...createUserDto,
      authentication,
    });

    return queryRunner.manager.save(user);
  }
}
