import { Injectable } from "@nestjs/common";
import { InjectRepository } from '@nestjs/typeorm';
import { RegistrationDto } from "src/authentication/registration.dto";
import { Authentication } from "src/authentication/authentication.entity";
import { QueryRunner } from "typeorm";
import { User } from "./user.entity";
import { UserRepository } from "./user.repository";

@Injectable()
export class UserService {
  constructor(
    private readonly _userRepository: UserRepository
  ) {}

  async findByUsername(username: string) {
    return await this._userRepository.findBy({ username });
  }

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
