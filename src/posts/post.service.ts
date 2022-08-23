import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult } from 'typeorm';
import { Post } from './post.entity';
import { User } from "../users/user.entity";
import { PostDto } from "./post.dto";

@Injectable()
export class PostService {
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

  async createPost(data: PostDto, user: User): Promise<Post> {
    const newPost = this.postsRepository.create(data);
    await this.postsRepository.save({ ...newPost, user })
    return newPost;
  }

  async updatePost(id: number, data: PostDto): Promise<UpdateResult> {
    const post = await this.postsRepository.update(id, data);
    return post;
  }

  async deletePost(id: number): Promise<Post> {
    const post = await this.getOneById(id);
    return this.postsRepository.remove(post);
  }
}
