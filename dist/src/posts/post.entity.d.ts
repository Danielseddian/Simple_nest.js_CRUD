import { AbstractEntity } from 'src/common/abstract.entity';
import { UserModule } from "../users/user.module";
export declare class Post extends AbstractEntity {
    title: string;
    text: string;
    user: UserModule;
}
