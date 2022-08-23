import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, ExtractJwt } from 'passport-jwt';
import { JwtPayload } from './authentication.interface';
import { UserService } from '../users/user.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly userService: UserService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: 'sigmar'
    })
  };

  async validate(payload: JwtPayload) {
    console.log('payload', payload)
    const { username } = payload;
    const entity = await this.userService.findByUsername(username);

    if (!entity) {
      throw new UnauthorizedException('User not found');
    };

    return entity;
  };
}