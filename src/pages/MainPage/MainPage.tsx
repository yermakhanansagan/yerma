import {Group, Image, Text} from '@mantine/core'
import {FC, useEffect} from 'react'
import armsImage from '../../assets/images/arms.jpg'
import backgroundImage from '../../assets/images/background.png'
import {AuthService} from '../../services/AuthService'

export const MainPage: FC = ({}) => {
	useEffect(() => {
		(async () => {
			console.log(AuthService.login('baigal.erhan@gmail.com', 'erhan1022'))
		})()
	}, [])

	return (
		<>
			<Image src={backgroundImage} alt='фон' mx='-md' mt='-md'/>
			<Group position='center'>
				<Image src={armsImage} alt='герб' width={100} mt='lg'/>
				<Text>Alumniclub друзей - студентов, выпускников</Text>
			</Group>
		</>
	)
}
