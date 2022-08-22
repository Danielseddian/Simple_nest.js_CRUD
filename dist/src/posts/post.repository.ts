import { Repository } from 'typeorm';
import { EntityRepository } from 'typeorm/decorator/EntityRepository';
import { Post } from './post.entity';

@EntityRepository(Post)
export class PostRepository extends Repository<Post> {}
