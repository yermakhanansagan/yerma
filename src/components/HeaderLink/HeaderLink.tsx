import {Button} from '@mantine/core'
import {SharedButtonProps} from '@mantine/core/lib/components/Button/Button'
import {FC} from 'react'
import {useLocation, useNavigate} from 'react-router-dom'

interface Props extends SharedButtonProps {
	className?: string
	path: string | string[]
	isDark: boolean
	callback?: () => void
}

export const HeaderLink: FC<Props> = ({children, className, path, isDark, callback, ...rest}) => {
	const navigate = useNavigate()
	const {pathname} = useLocation()

	const onClick = () => {
		if (!Array.isArray(path)) {
			navigate(path)
			callback && callback()
		}
	}

	const startsWith = () => {
		if (path === '/') {
			return false
		}
		if (path === '/auth') {
			return true
		}
		if (Array.isArray(path)) {
			return path.some(p => pathname.startsWith(p))
		}
		return pathname.startsWith(path)
	}

	const color = startsWith() ? 'blue' : isDark ? 'gray' : 'dark'

	return (
		<Button variant='subtle' onClick={onClick} className={className} color={color} {...rest}>
			{children}
		</Button>
	)
}
