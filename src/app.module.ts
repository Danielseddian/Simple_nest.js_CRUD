import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersService } from './users.service';
import { PostsController } from './posts/posts.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Post } from './posts/post.entity';
import config from '../ormconfig';
import { PostsService } from './posts/posts.service';

@Module({
  imports: [
    TypeOrmModule.forRoot(config),
    TypeOrmModule.forFeature([User, Post]),
  ],
  controllers: [AppController, PostsController],
  providers: [AppService, UsersService, PostsService],
})
export class AppModule {}
