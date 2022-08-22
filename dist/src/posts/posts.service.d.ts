import { Repository } from 'typeorm';
import { Post } from './post.entity';
export declare class PostsService {
    private postsRepository;
    constructor(postsRepository: Repository<Post>);
    getAll(): Promise<Post[]>;
    getOneById(id: number): Promise<Post>;
    createPost(title: string, text: string): Promise<Post>;
    updatePost(id: number, title: string, text: string): Promise<Post>;
    deletePost(id: number): Promise<Post>;
}
