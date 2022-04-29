import {Button, Group, PasswordInput, TextInput} from '@mantine/core'
import {useForm} from '@mantine/hooks'
import {observer} from 'mobx-react-lite'
import {FC} from 'react'
import {useNavigate} from 'react-router-dom'
import {At, Lock} from 'tabler-icons-react'
import {authState} from '../../store'
import {ILogin} from '../../types'

export const LoginForm: FC = observer(() => {
	const form = useForm<ILogin>({
		initialValues: {
			email: '',
			password: '',
		},
		validationRules: {
			email: value => /^\S+@\S+\.\S+$/.test(value),
			password: value => /^\S+$/.test(value),
		},
		errorMessages: {
			email: 'Неправильный формат',
			password: 'Введите пароль',
		},
	})
	const navigate = useNavigate()

	const onSubmit = form.onSubmit(async values => {
		await authState.login(values)
		navigate('/')
	})

	return (
		<form onSubmit={onSubmit}>
			<TextInput label='Email' {...form.getInputProps('email')} icon={<At size={14}/>}/>
			<PasswordInput label='Пароль' {...form.getInputProps('password')}
				icon={<Lock size={14}/>}
			/>
			<Group position='center' mt='md'>
				<Button type='submit'>Войти</Button>
			</Group>
		</form>
	)
})
