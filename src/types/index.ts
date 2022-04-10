import {FC, LazyExoticComponent} from 'react'

export interface IRoute {
	path: string
	title: string
	Component: LazyExoticComponent<FC>
}
