import { Authentication } from 'src/authentication/authentication.entity';
import { AbstractEntity } from 'src/common/abstract.entity';
import { Column, Entity, JoinColumn, OneToOne, Index, OneToMany } from 'typeorm';
import { Post } from "src/posts/post.entity";

@Entity({ name: 'users' })
export class User extends AbstractEntity {
  @Column()
  public username: string;

  @OneToOne(
    () => Authentication,
    (authentication: Authentication) => authentication.user,
    { eager: true, nullable: false, onDelete: 'CASCADE' },
  )

  @OneToMany(type => Post, post => post.user)
  post: Post[]

  @JoinColumn()
  public authentication: Authentication;
}
