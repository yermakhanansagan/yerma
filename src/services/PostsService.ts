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

	static async updatePost(postId: string): AxiosPromise<IPost> {
		return $api.put(`posts/${postId}/`)
	}

	static async partiallyUpdatePost(postId: string): AxiosPromise<IPost> {
		return $api.patch(`posts/${postId}/`)
	}

	static async deletePost(postId: string): AxiosPromise {
		return $api.delete(`posts/${postId}/`)
	}
}
