import { Injectable, Inject } from '@nestjs/common';

import { PostModel } from './models/post.model';
import { CreatePostDto } from './dto/create-post.dto';
import { User } from '../users/models/user.model';
import { InjectModel } from '@nestjs/sequelize';
import { PostsServiceInterface } from '../../interfaces/postService.interface';

@Injectable()
export class PostsService implements PostsServiceInterface {
    constructor(@InjectModel(PostModel)
    private readonly postRepository: typeof PostModel
    ) { }

    async create(post: CreatePostDto, userId): Promise<PostModel> {
        return await this.postRepository.create<PostModel>({ ...post, userId });
    }

    async find(userId): Promise<PostModel[]> {
        return await this.postRepository.findAll<PostModel>({
            where:{ userId },
            include: [{ model: User, attributes: { exclude: ['password'] } }],
        });
    }

    async findAll(): Promise<PostModel[]> {
        return await this.postRepository.findAll<PostModel>({
            include: [{ model: User, attributes: { exclude: ['password'] } }],
        });
    }

    async findOne(id): Promise<PostModel> {
        return await this.postRepository.findOne({
            where: { id },
            include: [{ model: User, attributes: { exclude: ['password'] } }],
        });
    }

    async delete(id, userId):Promise<any> {
        await this.postRepository.destroy({ where: { id, userId } });
        return "Deleted successfully";
    }

    async update(id, data, userId) {
        const [numberOfAffectedRows, [updatedPost]] = await this.postRepository.update({ ...data }, { where: { id, userId }, returning: true });
        return { numberOfAffectedRows, updatedPost };
    }
}