import {Divider, Navbar as MantineNavbar, useMantineTheme} from '@mantine/core'
import {useMediaQuery} from '@mantine/hooks'
import clsx from 'clsx'
import {FC} from 'react'
import {ZodiacAries} from 'tabler-icons-react'
import {HeaderLink} from '../HeaderLink'
import s from './Navbar.module.css'

interface Props {
	isOpen: boolean
	closeNavbar: () => void
}

export const Navbar: FC<Props> = ({isOpen, closeNavbar}) => {
	const isTablet = useMediaQuery('(max-width: 800px)')
	const theme = useMantineTheme()
	const isDark = theme.colorScheme === 'dark'

	if (!isTablet) {
		return null
	}

	return (
		<MantineNavbar hidden={!isOpen} p='md' className={s.navbar}>
			<MantineNavbar.Section>
				<HeaderLink path='/' isDark={isDark} className={clsx(s.logoWrapper, s.button)}
					callback={closeNavbar} size='lg' leftIcon={<ZodiacAries strokeWidth={3} className={s.logo}/>}
				>
					Yerma
				</HeaderLink>
			</MantineNavbar.Section>
			<Divider/>
			<MantineNavbar.Section grow mt='md'>
				<HeaderLink path='/alma-mater' isDark={isDark} className={s.button} callback={closeNavbar} size='lg'>
					Alma Mater
				</HeaderLink>
				<HeaderLink path='/news' isDark={isDark} className={s.button} callback={closeNavbar} size='lg'>
					Новости
				</HeaderLink>
				<HeaderLink path='/students' isDark={isDark} className={s.button} callback={closeNavbar} size='lg'>
					Студенты
				</HeaderLink>
				<HeaderLink path='/professors' isDark={isDark} className={s.button} callback={closeNavbar} size='lg'>
					Преподаватели
				</HeaderLink>
				<HeaderLink path='/education' isDark={isDark} className={s.button} callback={closeNavbar} size='lg'>
					Образование
				</HeaderLink>
				<HeaderLink path='/career' isDark={isDark} className={s.button} callback={closeNavbar} size='lg'>
					Карьера
				</HeaderLink>
				<HeaderLink path='/leisure' isDark={isDark} className={s.button} callback={closeNavbar} size='lg'>
					Досуг
				</HeaderLink>
			</MantineNavbar.Section>
		</MantineNavbar>
	)
}
