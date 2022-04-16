import {lazy} from 'react'
import {CreatePage} from './pages/CreatePage'
import {IRoute} from './types'

export const routes: IRoute[] = [{
	path: '/',
	title: 'Главная',
	Component: lazy(() => import('./pages/MainPage').then(({MainPage}) => ({default: MainPage}))),
}, {
	path: '/alma-mater',
	title: 'Alma Mater',
	Component: lazy(() => import('./pages/AlmaMaterPage').then(({AlmaMaterPage}) => ({default: AlmaMaterPage}))),
}, {
	path: '/news',
	title: 'Новости',
	Component: lazy(() => import('./pages/NewsPage').then(({NewsPage}) => ({default: NewsPage}))),
}, {
	path: '/essays',
	title: 'Эссе',
	withCreateButton: true,
	Component: lazy(() => import('./pages/EssaysPage').then(({EssaysPage}) => ({default: EssaysPage}))),
}, {
	path: '/people',
	title: 'Студенты',
	Component: lazy(() => import('./pages/PeoplePage').then(({PeoplePage}) => ({default: PeoplePage}))),
}, {
	path: '/education',
	title: 'Образование',
	Component: lazy(() => import('./pages/EducationPage').then(({EducationPage}) => ({default: EducationPage}))),
}, {
	path: '/career',
	title: 'Карьера',
	Component: lazy(() => import('./pages/CareerPage').then(({CareerPage}) => ({default: CareerPage}))),
}, {
	path: '/leisure',
	title: 'Досуг',
	Component: lazy(() => import('./pages/LeisurePage').then(({LeisurePage}) => ({default: LeisurePage}))),
}, {
	path: '/tales',
	title: 'Студенческие байки',
	Component: lazy(() => import('./pages/TalesPage').then(({TalesPage}) => ({default: TalesPage}))),
}, {
	path: '/memory',
	title: 'Память',
	Component: lazy(() => import('./pages/MemoryPage').then(({MemoryPage}) => ({default: MemoryPage}))),
}, {
	path: '/create',
	title: 'Добавить',
	Component: lazy(() => import('./pages/CreatePage').then(({CreatePage}) => ({default: CreatePage}))),
}, {
	path: '/auth',
	title: 'Авторизация',
	Component: lazy(() => import('./pages/AuthPage').then(({AuthPage}) => ({default: AuthPage}))),
}]
