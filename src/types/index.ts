import {FC, LazyExoticComponent} from 'react'

export interface IRoute {
	path: string
	title: string
	Component: LazyExoticComponent<FC>
	withCreateButton?: boolean
	postCategory?: PostCategoryEnum
}

export interface ILogin {
	email: string
	password: string
}

export interface ICreate {
	title: string
	description: string
}

export interface IHeaderContext {
	withCreateButton: boolean
	setWithCreateButton: (value: boolean) => void
}

export interface IUser {
	uuid: string
	email: string
	created_at: string
	updated_at: string
}

export enum PostCategoryEnum {
	NEWS = 'NEWS',
	POST = 'POST',
	TALE = 'TALE',
	ESSAY = 'ESSAY',
	EDUCATION = 'EDUCATION',
	CAREER = 'CAREER',
	LEISURE = 'LEISURE',
	GALLERY = 'GALLERY',
	MUSE = 'MUSE',
}

export interface IPost {
	uuid: string
	created_at: string
	updated_at: string
	author: string
	category: PostCategoryEnum[]
	name: string
	description: string
	images: IPostImage[]
}

export interface IPostImage {
	uuid: string
	created_at: string
	updated_at: string
	image: string
}

export interface ICreatePost {
	author: string
	categories: PostCategoryEnum[]
	name: string
	description: string
	images: string[]
}

export interface IToken {
	access: string
	refresh: string
}
