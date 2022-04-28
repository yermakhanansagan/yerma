import {$api} from '../api'
import {AxiosPromise, ICreatePost, IPost} from '../types'

export class PostsService {
	static async getPosts(): AxiosPromise<IPost[]> {
		return $api.get('posts/')
	}

	static async createPost(post: ICreatePost): AxiosPromise<IPost> {
		return $api.post('posts/', post)
	}

	static async getPost(postId: string): AxiosPromise<IPost> {
		return $api.get(`posts/${postId}/`)
	}

	static async updatePost(postId: string, post: ICreatePost): AxiosPromise<IPost> {
		return $api.put(`posts/${postId}/`, post)
	}

	static async partiallyUpdatePost(postId: string, post: ICreatePost): AxiosPromise<IPost> {
		return $api.patch(`posts/${postId}/`, post)
	}

	static async deletePost(postId: string): AxiosPromise {
		return $api.delete(`posts/${postId}/`)
	}
}
