import {lazy} from 'react'
import {CreatePage} from './pages'
import {IRoute, PostCategoryEnum} from './types'

export const routes: IRoute[] = [{
	path: '/',
	title: 'Главная',
	Component: lazy(() => import('./pages/MainPage').then(({MainPage}) => ({default: MainPage}))),
}, {
	path: '/alma-mater',
	title: 'Alma Mater',
	Component: lazy(() => import('./pages/AlmaMaterPage').then(({AlmaMaterPage}) => ({default: AlmaMaterPage}))),
	postCategory: PostCategoryEnum.POST,
}, {
	path: '/news',
	title: 'Новости',
	Component: lazy(() => import('./pages/NewsPage').then(({NewsPage}) => ({default: NewsPage}))),
	postCategory: PostCategoryEnum.NEWS,
}, {
	path: '/essays',
	title: 'Эссе',
	withCreateButton: true,
	Component: lazy(() => import('./pages/EssaysPage').then(({EssaysPage}) => ({default: EssaysPage}))),
	postCategory: PostCategoryEnum.ESSAY,
}, {
	path: '/teachers',
	title: 'Преподователи',
	Component: lazy(() => import('./pages/TeachersPage').then(({TeachersPage}) => ({default: TeachersPage}))),
}, {
	path: '/alumni',
	title: 'Выпускники',
	Component: lazy(() => import('./pages/AlumniPage').then(({AlumniPage}) => ({default: AlumniPage}))),
}, {
	path: '/education',
	title: 'Образование',
	withCreateButton: true,
	Component: lazy(() => import('./pages/EducationPage').then(({EducationPage}) => ({default: EducationPage}))),
	postCategory: PostCategoryEnum.EDUCATION,
}, {
	path: '/career',
	title: 'Карьера',
	withCreateButton: true,
	Component: lazy(() => import('./pages/CareerPage').then(({CareerPage}) => ({default: CareerPage}))),
	postCategory: PostCategoryEnum.CAREER,
}, {
	path: '/leisure',
	title: 'Досуг',
	Component: lazy(() => import('./pages/LeisurePage').then(({LeisurePage}) => ({default: LeisurePage}))),
	postCategory: PostCategoryEnum.LEISURE,
}, {
	path: '/tales',
	title: 'Студенческие байки',
	withCreateButton: true,
	Component: lazy(() => import('./pages/TalesPage').then(({TalesPage}) => ({default: TalesPage}))),
	postCategory: PostCategoryEnum.TALE,
}, {
	path: '/gallery',
	title: 'Галерея',
	withCreateButton: true,
	Component: lazy(() => import('./pages/GalleryPage').then(({GalleryPage}) => ({default: GalleryPage}))),
	postCategory: PostCategoryEnum.GALLERY,
}, {
	path: '/muz',
	title: '9 муз',
	withCreateButton: true,
	Component: lazy(() => import('./pages/MuzPage').then(({MuzPage}) => ({default: MuzPage}))),
	postCategory: PostCategoryEnum.MUSE,
}, {
	path: '/calendar',
	title: 'Календарь',
	withCreateButton: true,
	Component: lazy(() => import('./pages/CalendarPage').then(({CalendarPage}) => ({default: CalendarPage}))),
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
