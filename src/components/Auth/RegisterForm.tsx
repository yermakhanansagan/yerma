import {Button, Group, PasswordInput, TextInput} from '@mantine/core'
import {useForm} from '@mantine/hooks'
import {FC} from 'react'
import {At, Lock} from 'tabler-icons-react'
import {ILogin} from '../../types'

export const RegisterForm: FC = () => {
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

	return (
		<form onSubmit={form.onSubmit(values => console.log(values))}>
			<TextInput label='Email' {...form.getInputProps('email')} icon={<At size={14}/>}/>
			<PasswordInput label='Пароль' {...form.getInputProps('password')}
				icon={<Lock size={14}/>}
			/>
			<Group position='center' mt='md'>
				<Button type='submit'>Зарегистрироваться</Button>
			</Group>
		</form>
	)
}
