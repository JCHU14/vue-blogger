import { AppState } from "../AppState";
import { Post } from "../models/Post";
import { logger } from "../utils/Logger";
import { api } from "./AxiosService";




class PostsService {
    async getPosts() {
        const res = await api.get('api/blogs')
        logger.log('got posts', res.data)
        const newPost = res.data.map(pojo => new Post(pojo))
        AppState.posts = newPost
    }
}



export const postsService = new PostsService();