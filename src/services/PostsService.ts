import {$api} from '../api'
import {ICreatePost, IPost, PostCategoryEnum} from '../types'

export class PostsService {
	static async getPosts(category: PostCategoryEnum): Promise<{results: IPost[]}> {
		return $api.get('posts/', {
			params: {
				category,
			},
		})
	}

	static async createPost(post: FormData): Promise<IPost> {
		return $api.post('posts/', post)
	}

	static async getPost(postId: string): Promise<IPost> {
		return $api.get(`posts/${postId}/`)
	}

	static async updatePost(postId: string, post: ICreatePost): Promise<IPost> {
		return $api.put(`posts/${postId}/`, post)
	}

	static async partiallyUpdatePost(postId: string, post: ICreatePost): Promise<IPost> {
		return $api.patch(`posts/${postId}/`, post)
	}

	static async deletePost(postId: string): Promise<null> {
		return $api.delete(`posts/${postId}/`)
	}
}
