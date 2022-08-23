import { Authentication } from 'src/authentication/authentication.entity';
import { AbstractEntity } from 'src/common/abstract.entity';
import { Column, Entity, JoinColumn, OneToOne, Index } from 'typeorm';

@Entity({ name: 'users' })
export class User extends AbstractEntity {
  @Column()
  public username: string;

  @OneToOne(
    () => Authentication,
    (authentication: Authentication) => authentication.user,
    { eager: true, nullable: false, onDelete: 'CASCADE' },
  )
  @JoinColumn()
  @Index()
  public authentication: Authentication;
}
