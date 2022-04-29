import {makeAutoObservable} from 'mobx'
import {PostsService} from '../services'
import {IPost, PostCategoryEnum} from '../types'

export class PostsState {
	posts = [] as IPost[]

	constructor() {
		makeAutoObservable(this)
	}

	setPosts(posts: IPost[]) {
		this.posts = posts
	}

	async getPosts(category: PostCategoryEnum) {
		this.setPosts([])
		const {results} = await PostsService.getPosts(category)
		this.setPosts(results)
	}
}
