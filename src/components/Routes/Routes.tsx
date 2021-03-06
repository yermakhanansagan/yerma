import {FC, Suspense} from 'react'
import {Route, Routes as ReactRouterRoutes} from 'react-router-dom'
import {Page} from '../../pages'
import {routes} from '../../routes'
import {Preloader} from '../Preloader'

export const Routes: FC = () => {
	return (
		<Suspense fallback={<Preloader/>}>
			<ReactRouterRoutes>
				{routes.map(({path, title, Component, withCreateButton, postCategory}) => (
					<Route key={path} path={path}
						element={
							<Page
								title={title} Component={Component} withCreateButton={withCreateButton}
								postCategory={postCategory}
							/>
						}
					/>
				))}
			</ReactRouterRoutes>
		</Suspense>
	)
}
