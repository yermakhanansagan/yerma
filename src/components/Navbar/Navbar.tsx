import {Navbar as MantineNavbar, ScrollArea, useMantineTheme} from '@mantine/core'
import {useMediaQuery} from '@mantine/hooks'
import clsx from 'clsx'
import {FC} from 'react'
import {ButtonLink} from '../ButtonLink'
import s from './Navbar.module.css'

interface Props {
	isOpen: boolean
	closeNavbar: () => void
}

export const Navbar: FC<Props> = ({isOpen, closeNavbar}) => {
	const theme = useMantineTheme()
	const isTablet = useMediaQuery(`(max-width: ${theme.breakpoints.sm}px)`)
	const isDark = theme.colorScheme === 'dark'

	return (
		<MantineNavbar hidden={!isOpen} p='md' className={clsx(isTablet && s.navbar)} hiddenBreakpoint='sm'
			width={{sm: 200, lg: 300}}
		>
			<MantineNavbar.Section grow component={ScrollArea}>
				<ButtonLink path='/alma-mater' fullWidth callback={closeNavbar}>
					Alma Mater
				</ButtonLink>
				<ButtonLink path='/news' fullWidth callback={closeNavbar}>
					Новости ВГПУ
				</ButtonLink>
				<ButtonLink path='/essays' fullWidth callback={closeNavbar}>
					Эссе
				</ButtonLink>
				<ButtonLink path='/people' fullWidth callback={closeNavbar}>
					Люди
				</ButtonLink>
				<ButtonLink path='/career' fullWidth callback={closeNavbar}>
					Карьера
				</ButtonLink>
				<ButtonLink path='/education' fullWidth callback={closeNavbar}>
					Образование
				</ButtonLink>
				<ButtonLink path='/leisure' fullWidth callback={closeNavbar}>
					Досуг
				</ButtonLink>
			</MantineNavbar.Section>
		</MantineNavbar>
	)
}
