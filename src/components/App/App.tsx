import {
	AppShell,
	ColorScheme,
	ColorSchemeProvider,
	Container,
	MantineProvider,
	Paper,
	useMantineTheme,
} from '@mantine/core'
import {useColorScheme, useHotkeys, useLocalStorage, useMediaQuery} from '@mantine/hooks'
import {FC, useState} from 'react'
import {BrowserRouter} from 'react-router-dom'
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
	const theme = useMantineTheme()
	const isTablet = useMediaQuery(`(max-width: ${theme.breakpoints.sm}px)`)

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

	useHotkeys([['mod+J', () => toggleColorScheme()]])

	return (
		<BrowserRouter>
			<ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
				<MantineProvider theme={{colorScheme}}>
					<Paper radius={0} className={s.paper}>
						<AppShell
							fixed
							navbarOffsetBreakpoint='sm'
							header={
								<Header toggleColorScheme={toggleColorScheme} isNavbarOpen={isNavbarOpen}
									toggleNavbar={toggleNavbar}
								/>}
							navbar={<Navbar isOpen={isNavbarOpen} closeNavbar={closeNavbar}/>}
						>
							<Container px={isTablet ? 0 : 'md'} className={s.container}>
								<Routes/>
							</Container>
						</AppShell>
					</Paper>
				</MantineProvider>
			</ColorSchemeProvider>
		</BrowserRouter>
	)
}
