import { PostsService } from './posts.service';
import { Post as UserPost } from './post.entity';
export declare class PostsController {
    private readonly postsService;
    constructor(postsService: PostsService);
    create(body: UserPost): Promise<UserPost>;
    getAllPosts(): Promise<UserPost[]>;
    getPost(postId: number): Promise<UserPost>;
    remove(postId: number): Promise<UserPost>;
    update(postId: number, body: UserPost): Promise<UserPost>;
}
