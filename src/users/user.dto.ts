import { IsNotEmpty, IsString } from 'class-validator';
import { CreateAuthenticationDto } from 'src/authentication/create-authentication.dto';
import { AuthenticationDto } from "../authentication/authentication.dto";

export class CreateUserDto extends CreateAuthenticationDto {
  @IsString()
  @IsNotEmpty()
  readonly username: string;

  readonly authentication: AuthenticationDto;
}
