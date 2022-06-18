import { PostDatabase } from "../data/PostDatabase"
import { Post, PostInputDTO, POST_TYPES } from "../model/post"
import { geraId } from '../services/geraId'

export class PostBusiness {
    public async create(input: PostInputDTO ):Promise<void> {

        const { photo, description, type, authorId } = input;

        if (!photo || !description ||  !type || !authorId) {
            throw new Error("Dados inválidos photo, description, type, authorId")
        }

        const postId: string = geraId()

        const newPost: Post  = { 
            id: postId, 
            photo, 
            description, 
            type,  
            author_id: authorId }

        const postDatabase = new PostDatabase()
        await postDatabase.create(newPost)
    }

    public getPostById = async (id: string) => {

        const postDatabase = new PostDatabase
        const result = await postDatabase.getPost(id)

        return result

    }

}