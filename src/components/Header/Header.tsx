import {
	ActionIcon,
	Burger,
	ColorScheme,
	Group,
	Header as MantineHeader,
	Modal,
	Text,
	TextInput,
	useMantineTheme,
} from '@mantine/core'
import {useMediaQuery} from '@mantine/hooks'
import clsx from 'clsx'
import {FC, useContext, useState} from 'react'
import {useNavigate} from 'react-router-dom'
import {Login, Plus, Search} from 'tabler-icons-react'
import {HeaderContext} from '../../context'
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
	const navigate = useNavigate()
	const isTablet = useMediaQuery(`(max-width: ${theme.breakpoints.sm}px)`)
	const [isModalOpen, setIsModalOpen] = useState(false)
	const {withCreateButton} = useContext(HeaderContext)

	const onBurgerClick = () => {
		toggleNavbar()
	}

	const onModalClose = () => {
		setIsModalOpen(false)
	}

	const onSearchClick = () => {
		setIsModalOpen(true)
	}

	const onCreateClick = () => {
		navigate('/create')
	}

	return (
		<MantineHeader height={70} py='md' px={isTablet ? 'xs' : 'md'}>
			<Group position='apart'>
				{isTablet ? (
					<Burger opened={isNavbarOpen} onClick={onBurgerClick} size={26} color='gray'/>
				) : (
					<ButtonLink path='/' px={0} className={s.logoWrapper}
					>
						<Group align='center'>
							<Text>ВГПУ</Text>
							<Text>|</Text>
							<Text size='lg'>Vinnitsa.kz</Text>
						</Group>
					</ButtonLink>
				)}
				<Group>
					{withCreateButton && (isTablet ? (
						<ActionIcon size={36} variant='outline' onClick={onCreateClick}>
							<Plus size={18}/>
						</ActionIcon>
					) : (
						<ButtonLink path='/create' variant='outline' size={isTablet ? 'sm' : 'md'}
							className={clsx(s.button, s.addButton)} rightIcon={<Plus size={18}/>}
						>
							Добавить
						</ButtonLink>
					))}
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
					<ButtonLink path='/auth' variant='light' size={isTablet ? 'sm' : 'md'} className={s.button}
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
