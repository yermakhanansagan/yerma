import {Menu} from '@mantine/core'
import {FC} from 'react'
import {useLocation, useNavigate} from 'react-router-dom'

interface Props {
	path: string
}

export const HeaderMenuItem: FC<Props> = ({children, path}) => {
	const navigate = useNavigate()
	const {pathname} = useLocation()
	const color = pathname.startsWith(path) ? 'blue' : undefined

	const onClick = () => {
		navigate(path)
	}

	return (
		<Menu.Item onClick={onClick} color={color}>
			{children}
		</Menu.Item>
	)
}
