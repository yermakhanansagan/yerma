import {ActionIcon} from '@mantine/core'
import {FC} from 'react'
import {Moon, Sun} from 'tabler-icons-react'

interface Props {
	isDark: boolean
	toggle: () => void
}

export const DarkModeButton: FC<Props> = ({isDark, toggle}) => {
	const onClick = () => {
		toggle()
	}

	return (
		<ActionIcon size={36} title='Тёмный режим' variant='default' onClick={onClick}>
			{isDark ? (
				<Sun size={18}/>
			) : (
				<Moon size={18}/>
			)}
		</ActionIcon>
	)
}
