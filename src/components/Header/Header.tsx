import {
	ActionIcon,
	Burger,
	ColorScheme,
	Group,
	Header as MantineHeader,
	Modal,
	TextInput,
	useMantineTheme,
} from '@mantine/core'
import {useMediaQuery} from '@mantine/hooks'
import {FC, useState} from 'react'
import {Login, Search} from 'tabler-icons-react'
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
	const [isModalOpen, setIsModalOpen] = useState(false)

	const onBurgerClick = () => {
		toggleNavbar()
	}

	const onModalClose = () => {
		setIsModalOpen(false)
	}

	const onSearchClick = () => {
		setIsModalOpen(true)
	}

	return (
		<MantineHeader height={70} py='md' px={isTablet ? 'xs' : 'md'}>
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
					{isTablet ? (
						<>
							<ActionIcon size={36} title='Поиск' variant='default' onClick={onSearchClick}>
								<Search size={18}/>
							</ActionIcon>
							<Modal opened={isModalOpen} onClose={onModalClose} withCloseButton={false}>
								<TextInput placeholder='Поиск' icon={<Search size={18}/>}/>
							</Modal>
						</>
					) : (
						<TextInput placeholder='Поиск' icon={<Search size={18}/>}/>
					)}
					<ButtonLink path='/auth' variant='light' size={isTablet ? 'sm' : 'md'} className={s.loginButton}
						rightIcon={<Login size={18}/>}
					>
						Войти
					</ButtonLink>
					<DarkModeButton toggle={toggleColorScheme}/>
				</Group>
			</Group>
		</MantineHeader>
	)
}
