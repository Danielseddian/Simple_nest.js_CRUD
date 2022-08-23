import { Repository } from 'typeorm';
import { EntityRepository } from 'typeorm/decorator/EntityRepository';
import { Authentication } from './authentication.entity';

@EntityRepository(Authentication)
export class AuthenticationRepository extends Repository<Authentication> {}
