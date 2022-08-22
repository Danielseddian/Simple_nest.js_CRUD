import { AuthenticationEntity } from 'src/authentication/authentication.entity';
import { AbstractEntity } from 'src/common/abstract.entity';
import { Column, Entity, JoinColumn, OneToOne, Index } from 'typeorm';

@Entity({ name: 'users' })
export class UserEntity extends AbstractEntity {
  @Column()
  public login: string;

  @OneToOne(
    () => AuthenticationEntity,
    (authentication: AuthenticationEntity) => authentication.user,
    { eager: true, nullable: false, onDelete: 'CASCADE' },
  )
  @JoinColumn()
  @Index()
  public authentication: AuthenticationEntity;
}
