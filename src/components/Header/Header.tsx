import {Burger, ColorScheme, Container, Group, Header as MantineHeader, useMantineTheme} from '@mantine/core'
import {useMediaQuery} from '@mantine/hooks'
import {FC} from 'react'
import {Login} from 'tabler-icons-react'
import {ButtonLink} from '../ButtonLink'
import {DarkModeButton} from '../DarkModeButton'
import s from './Header.module.css'

interface Props {
	toggleColorScheme: (value?: ColorScheme) => void
	isNavbarOpen: boolean
	toggleNavbar: () => void
}

export const Header: FC<Props> = ({toggleColorScheme, isNavbarOpen, toggleNavbar}) => {
	const theme = useMantineTheme()
	const isTablet = useMediaQuery(`(max-width: ${theme.breakpoints.sm}px)`)

	const onBurgerClick = () => {
		toggleNavbar()
	}

	return (
		<MantineHeader height={70} py='md' px={isTablet ? 'xs' : 'md'}>
			<Container px={isTablet ? 0 : 'md'}>
				<Group position='apart'>
					{isTablet ? (
						<Burger opened={isNavbarOpen} onClick={onBurgerClick} size={26} color='gray'/>
					) : (
						<ButtonLink path='/' px={0} className={s.logoWrapper}
						>
							ВГПУ
						</ButtonLink>
					)}
					<Group>
						<ButtonLink path='/auth' variant='light' rightIcon={<Login size={20}/>}>
							Войти
						</ButtonLink>
						<DarkModeButton toggle={toggleColorScheme}/>
					</Group>
				</Group>
			</Container>
		</MantineHeader>
	)
}
