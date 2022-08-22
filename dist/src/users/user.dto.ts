import { IsNotEmpty, IsString } from 'class-validator';
import { CreateAuthenticationDto } from 'src/authentication/authentication.dto';

export class CreateUserDto extends CreateAuthenticationDto {
  @IsString()
  @IsNotEmpty()
  readonly login: string;
}
