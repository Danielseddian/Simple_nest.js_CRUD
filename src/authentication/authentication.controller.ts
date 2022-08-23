import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { User } from 'src/users/user.entity';
import { RegistrationDto } from './registration.dto';
import { AuthenticationService } from './authentication.service';

@Controller('Authentication')
export class AuthenticationController {
  constructor(private readonly _authenticationService: AuthenticationService) {}

  @Post('registration')
  @HttpCode(HttpStatus.OK)
  async registration(@Body() registrationDto: RegistrationDto): Promise<User> {
    return this._authenticationService.registration(registrationDto);
  }
}
