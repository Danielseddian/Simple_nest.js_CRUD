import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  HttpCode,
  HttpStatus,
  Body,
  Param,
} from '@nestjs/common';
import { PostsService } from './posts.service';
import { Post as UserPost } from './post.entity';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}
  @Post()
  async create(@Body() body: UserPost): Promise<UserPost> {
    const post: UserPost = await this.postsService.createPost(
      body.title,
      body.text,
    );
    console.log(`Новый пост: "${post.title}" успешно создан`);
    return post;
  }
  @Get()
  getAllPosts(): Promise<UserPost[]> {
    return this.postsService.getAll();
  }
  @Get(':id')
  async getPost(@Param('id') postId: number): Promise<UserPost> {
    const post: UserPost = await this.postsService.getOneById(postId);
    return post;
  }
  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async remove(@Param('id') postId: number): Promise<UserPost> {
    const post: UserPost = await this.postsService.deletePost(postId);
    console.log(`Пост № ${post.id} удалён.`);
    return post;
  }
  @Patch(':id')
  async update(
    @Param('id') postId: number,
    @Body() body: UserPost,
  ): Promise<UserPost> {
    const post: UserPost = await this.postsService.updatePost(
      postId,
      body.title,
      body.text,
    );
    console.log(`Пост № ${post.id} обновлён.`);
    return post;
  }
}
