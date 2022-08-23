import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostService } from './post.service';
import { PostController } from './post.controller';
import { Post } from './post.entity';
import { AuthenticationModule as AuthModule } from "../authentication/authentication.module";

@Module({
  imports: [TypeOrmModule.forFeature([Post]), AuthModule],
  providers: [PostService],
  controllers: [PostController],
})
export class PostModule {}
