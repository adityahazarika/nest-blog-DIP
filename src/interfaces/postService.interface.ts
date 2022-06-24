import { PostModel } from "../modules/posts/models/post.model"

export interface PostsServiceInterface{
    create(post,userId):Promise<PostModel>
    find(userId):Promise<PostModel[]>
    findAll():Promise<PostModel[]>
    findOne(id):Promise<PostModel>
    delete(id,userId):Promise<any>
    update(id, data, userId):Promise<any>
}