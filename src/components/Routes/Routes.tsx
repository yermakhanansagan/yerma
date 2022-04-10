import {FC, Suspense} from 'react'
import {Route, Routes as ReactRouterRoutes} from 'react-router-dom'
import {Page} from '../../pages/Page/Page'
import {routes} from '../../routes'
import {Preloader} from '../Preloader'

export const Routes: FC = () => {
	return (
		<Suspense fallback={<Preloader/>}>
			<ReactRouterRoutes>
				{routes.map(({path, title, Component}) => (
					<Route key={path} path={path} element={<Page title={title} Component={Component}/>}/>
				))}
			</ReactRouterRoutes>
		</Suspense>
	)
}
