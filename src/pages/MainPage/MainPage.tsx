import {Image} from '@mantine/core'
import {FC} from 'react'
import backgroundImage from '../../assets/images/background.png'

export const MainPage: FC = ({}) => {
	return (
			<Image src={backgroundImage} alt='фон' mx='-md'/>
	)
}
