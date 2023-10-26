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

    async createPost(postData) {
        const res = await api.post('api/blogs', postData)
        logger.log('creating post', res.data)
        const newPost = new Post(res.data)
        AppState.posts = newPost

    }


    async destroyPost(postId) {
        const res = await api.delete(`api/blogs/${postId}`)
        logger.log('DESTROYED POST', res.data)
    }


    async getPostById(postId) {
        const res = await api.delete(`api/blogs/${postId}`)
        logger.log('got post id', res.data)
        const newPost = new Post(res.data)
        AppState.activePost = newPost
    }
}



export const postsService = new PostsService();