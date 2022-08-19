import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Post } from './post.entity';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(Post) private postsRepository: Repository<Post>,
  ) {}

  getAll(): Promise<Post[]> {
    return this.postsRepository.find();
  }

  async getOneById(id: number): Promise<Post> {
    try {
      const post = await this.postsRepository.findOneOrFail({
        where: { id: id },
      });
      return post;
    } catch (err) {
      throw err;
    }
  }

  async createPost(title: string, text: string): Promise<Post> {
    const newPost = this.postsRepository.create({ title, text });
    return await this.postsRepository.save(newPost);
  }

  async updatePost(id: number, title: string, text: string): Promise<Post> {
    const post = await this.getOneById(id);
    post.title = title;
    post.text = text;
    return this.postsRepository.save(post);
  }

  async deletePost(id: number): Promise<Post> {
    const post = await this.getOneById(id);
    return this.postsRepository.remove(post);
  }
}
