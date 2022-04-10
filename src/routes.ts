import {lazy} from 'react'
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
	path: '/students',
	title: 'Студенты',
	Component: lazy(() => import('./pages/StudentsPage').then(({StudentsPage}) => ({default: StudentsPage}))),
}, {
	path: '/professors',
	title: 'Преподаватели',
	Component: lazy(() => import('./pages/ProfessorsPage').then(({ProfessorsPage}) => ({default: ProfessorsPage}))),
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
	path: '/auth',
	title: 'Авторизация',
	Component: lazy(() => import('./pages/AuthPage').then(({AuthPage}) => ({default: AuthPage}))),
}]