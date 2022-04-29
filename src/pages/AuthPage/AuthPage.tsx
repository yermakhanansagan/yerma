import {Button, Card, Divider, Group, Text} from '@mantine/core'
import {FC, useState} from 'react'
import {LoginForm, RegisterForm} from '../../components/Auth'

export const AuthPage: FC = () => {
	const [isLogin, setIsLogin] = useState(true)

	const toggleMode = () => {
		setIsLogin(prev => !prev)
	}

	return (
		<Card sx={{maxWidth: 300}} mx='auto' mt='lg' shadow='xl'>
			<Card.Section p='md'>
				<Group position='apart'>
					<Text>
						{isLogin ? 'Вход' : 'Регистрация'}
					</Text>
					<Button onClick={toggleMode} variant='subtle'>
						{isLogin ? 'Зарегистрироваться' : 'Войти'}
					</Button>
				</Group>
			</Card.Section>
			<Divider mx='-md'/>
			<Card.Section p='md'>
				{isLogin ? (
					<LoginForm/>
				) : (
					<RegisterForm/>
				)}
			</Card.Section>
		</Card>
	)
}
