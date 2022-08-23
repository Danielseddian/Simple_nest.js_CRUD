import { AbstractDto } from 'src/common/abstract.dto';

export class AuthenticationDto extends AbstractDto {
  readonly email: string;
}
