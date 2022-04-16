import {AppShell, ColorScheme, ColorSchemeProvider, Container, MantineProvider, Paper} from '@mantine/core'
import {useColorScheme, useHotkeys, useLocalStorage} from '@mantine/hooks'
import {FC, useState} from 'react'
import {BrowserRouter} from 'react-router-dom'
import {Aside} from '../Aside'
import {Header} from '../Header'
import {Navbar} from '../Navbar'
import {Routes} from '../Routes'
import s from './App.module.css'

export const App: FC = () => {
	const preferredColorScheme = useColorScheme()
	const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
		key: 'color-scheme',
		defaultValue: preferredColorScheme,
		getInitialValueInEffect: true,
	})
	const [isNavbarOpen, setIsNavbarOpen] = useState(false)
	const [isAsideOpen, setIsAsideOpen] = useState(false)

	const toggleColorScheme = (value?: ColorScheme) => {
		if (value) {
			setColorScheme(value)
		} else {
			setColorScheme(prev => prev === 'dark' ? 'light' : 'dark')
		}
	}

	const toggleNavbar = () => {
		setIsNavbarOpen(prev => !prev)
	}

	const closeNavbar = () => {
		setIsNavbarOpen(false)
	}

	const closeAside = () => {
		setIsAsideOpen(false)
	}

	useHotkeys([['mod+J', () => toggleColorScheme()]])

	return (
		<BrowserRouter>
			<ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
				<MantineProvider theme={{colorScheme}} withCSSVariables withNormalizeCSS>
					<Paper radius={0} className={s.paper}>
						<AppShell
							fixed
							navbarOffsetBreakpoint='sm'
							asideOffsetBreakpoint='sm'
							header={
								<Header toggleColorScheme={toggleColorScheme} isNavbarOpen={isNavbarOpen}
									toggleNavbar={toggleNavbar}
								/>}
							navbar={<Navbar isOpen={isNavbarOpen} closeNavbar={closeNavbar}/>}
							aside={<Aside isOpen={isAsideOpen} closeNavbar={closeAside}/>}
						>
							<Container pl={0} pr='md' className={s.container}>
								<Routes/>
							</Container>
						</AppShell>
					</Paper>
				</MantineProvider>
			</ColorSchemeProvider>
		</BrowserRouter>
	)
}
