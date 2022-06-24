import { User } from "../modules/users/models/user.model"

export interface UserServiceInterface{
    create(post):Promise<User>
    findAll():Promise<User[]>
    findOne(id):Promise<User>
    delete(id):Promise<any>
}