import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  HttpCode,
  HttpStatus,
  UseGuards,
  Body,
  Param,
} from '@nestjs/common';
import { PostService } from './post.service';
import { AuthGuard } from '@nestjs/passport';
import { Post as PostEntity } from './post.entity';
import { PostDto } from "./post.dto";
import { User } from 'src/users/user.entity'
import { UserDecorator } from "src/users/user.decorator";
import { UpdateResult } from "typeorm";

@Controller('posts')
export class PostController {
  constructor(private readonly postsService: PostService) {}
  @Post()
  @UseGuards(AuthGuard())
  async create(@Body() data: PostDto, @UserDecorator() user: User): Promise<PostEntity> {
    const post: PostEntity = await this.postsService.createPost(
      data,
      user
    );
    console.log(`Новый пост: "${post.title}" успешно создан`);
    return post;
  }
  @Get()
  getAllPosts(): Promise<PostEntity[]> {
    return this.postsService.getAll();
  }
  @Get(':id')
  async getPost(@Param('id') postId: number): Promise<PostEntity> {
    const post: PostEntity = await this.postsService.getOneById(postId);
    return post;
  }
  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async remove(@Param('id') postId: number): Promise<PostEntity> {
    const post: PostEntity = await this.postsService.deletePost(postId);
    console.log(`Пост № ${post.id} удалён.`);
    return post;
  }
  @Patch(':id')
  async update(
    @Param('id') postId: number,
    @Body() data: PostDto,
  ): Promise<UpdateResult> {
      const post: UpdateResult = await this.postsService.updatePost(
      postId,
      data,
    );
    console.log(`Пост № ${postId} обновлён.`);
    return post;
  }
}
