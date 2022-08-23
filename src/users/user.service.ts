import { Injectable } from '@nestjs/common';
import { RegistrationDto } from 'src/authentication/registration.dto';
import { Authentication } from 'src/authentication/authentication.entity';
import { QueryRunner } from 'typeorm';
import { User } from './user.entity';
import { UserRepository } from './user.repository';

@Injectable()
export class UserService {
  constructor(private readonly _userRepository: UserRepository) {}

  public async createUser(
    registrationDto: RegistrationDto,
    authentication: Authentication,
    queryRunner: QueryRunner,
  ): Promise<User> {
    const user = this._userRepository.create({
      ...registrationDto,
      authentication,
    });

    return queryRunner.manager.save(user);
  }
}
