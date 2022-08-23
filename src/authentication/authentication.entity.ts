import { Exclude } from 'class-transformer';
import { AbstractEntity } from 'src/common/abstract.entity';
import { User } from 'src/users/user.entity';
import { Column, Entity, OneToOne } from 'typeorm';

@Entity({ name: 'authentications' })
export class Authentication extends AbstractEntity {
  @Column({ unique: true })
  public email: string;

  @Column()
  @Exclude()
  public password: string;

  @OneToOne(() => User, (user: User) => user.authentication)
  @Exclude()
  public user: User;
}
