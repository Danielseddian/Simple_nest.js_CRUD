import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { AbstractEntity } from 'src/common/abstract.entity';
import { UserModule } from "../users/user.module";
import { Exclude } from "class-transformer";
import { User } from 'src/users/user.entity'

@Entity()
export class Post extends AbstractEntity {
  @Column()
  title: string;

  @Column()
  text: string;

  @ManyToOne(type => User, user => user.post)
  user: UserModule;
}
