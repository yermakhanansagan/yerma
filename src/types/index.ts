import {FC, LazyExoticComponent} from 'react'

export interface IRoute {
	path: string
	title: string
	Component: LazyExoticComponent<FC>
}

export interface ILogin {
	email: string
	password: string
}

export interface ICreate {
	title: string
	description: string
}
