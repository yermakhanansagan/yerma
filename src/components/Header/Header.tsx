import {Burger, ColorScheme, Container, Group, Header as MantineHeader, Menu, useMantineTheme} from '@mantine/core'
import {useMediaQuery} from '@mantine/hooks'
import {FC} from 'react'
import {Login, ZodiacAries} from 'tabler-icons-react'
import {DarkModeButton} from '../DarkModeButton'
import {HeaderLink} from '../HeaderLink'
import {HeaderMenuItem} from '../HeaderMenuItem'
import s from './Header.module.css'

interface Props {
	toggleColorScheme: (value?: ColorScheme) => void
	isNavbarOpen: boolean
	toggleNavbar: () => void
}

export const Header: FC<Props> = ({toggleColorScheme, isNavbarOpen, toggleNavbar}) => {
	const theme = useMantineTheme()
	const isDark = theme.colorScheme === 'dark'
	const isTablet = useMediaQuery('(max-width: 800px)')

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
						<HeaderLink path='/' isDark={isDark} px={0} className={s.logoWrapper}
							leftIcon={<ZodiacAries strokeWidth={3} className={s.logo}/>}
						>
							Yerma
						</HeaderLink>
					)}
					{!isTablet && (
						<Group>
							<HeaderLink path='/alma-mater' isDark={isDark}>
								Alma Mater
							</HeaderLink>
							<HeaderLink path='/news' isDark={isDark}>
								Новости
							</HeaderLink>
							<Menu
								placement='center'
								trigger='hover'
								control={
									<div>
										<HeaderLink path={['/students', '/professors', '/education', '/career']}
											isDark={isDark}
										>
											Люди
										</HeaderLink>
									</div>
								}
							>
								<HeaderMenuItem path='/students'>
									Студенты
								</HeaderMenuItem>
								<HeaderMenuItem path='/professors'>
									Преподаватели
								</HeaderMenuItem>
								<HeaderMenuItem path='/education'>
									Образование
								</HeaderMenuItem>
								<HeaderMenuItem path='/career'>
									Карьера
								</HeaderMenuItem>
							</Menu>
							<HeaderLink path='/leisure' isDark={isDark}>
								Досуг
							</HeaderLink>
						</Group>
					)}
					<Group>
						<HeaderLink path='/auth' isDark={isDark} variant='light' rightIcon={<Login size={20}/>}>
							Войти
						</HeaderLink>
						<DarkModeButton isDark={isDark} toggle={toggleColorScheme}/>
					</Group>
				</Group>
			</Container>
		</MantineHeader>
	)
}
