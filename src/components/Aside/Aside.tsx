import {Aside as MantineAside, ScrollArea, useMantineTheme} from '@mantine/core'
import {useMediaQuery} from '@mantine/hooks'
import clsx from 'clsx'
import {FC} from 'react'
import {ButtonLink} from '../ButtonLink'
import s from './Aside.module.css'

interface Props {
	isOpen: boolean
	closeNavbar: () => void
}

export const Aside: FC<Props> = ({isOpen, closeNavbar}) => {
	const theme = useMantineTheme()
	const isTablet = useMediaQuery(`(max-width: ${theme.breakpoints.sm}px)`)
	const isDark = theme.colorScheme === 'dark'

	return (
		<MantineAside hidden={!isOpen} p='md' className={clsx(isDark ? s.dark : s.light, isTablet && s.tabletAside)} hiddenBreakpoint='sm'
			width={{sm: 200, lg: 300}}
		>
			<MantineAside.Section grow component={ScrollArea}>
			<ButtonLink path='/leisure' fullWidth callback={closeNavbar}>
					Досуг
				</ButtonLink>
				<ButtonLink path='/tales' fullWidth callback={closeNavbar}>
					Студенческие байки
				</ButtonLink>
				<ButtonLink path='/gallery' fullWidth callback={closeNavbar}>
					Фото-видео-галерея
				</ButtonLink>
				<ButtonLink path='/muz' fullWidth callback={closeNavbar}>
					“9 Муз”
				</ButtonLink>
				<ButtonLink path='/calendar' fullWidth callback={closeNavbar}>
					Памятный календарь
				</ButtonLink>
				<ButtonLink path='/memory' fullWidth callback={closeNavbar}>
					Мемory
				</ButtonLink>
			</MantineAside.Section>
		</MantineAside>
	)
}
