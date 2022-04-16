import {Box, Button, Group, MantineTheme, Text, Textarea, TextInput, useMantineTheme} from '@mantine/core'
import {Dropzone, DropzoneStatus} from '@mantine/dropzone'
import {useForm} from '@mantine/hooks'
import {ComponentProps, FC} from 'react'
import {Icon as TablerIcon, Photo, Upload, X} from 'tabler-icons-react'
import {ICreate} from '../../types'

function getIconColor(status: DropzoneStatus, theme: MantineTheme) {
	return status.accepted
		? theme.colors[theme.primaryColor][theme.colorScheme === 'dark' ? 4 : 6]
		: status.rejected
			? theme.colors.red[theme.colorScheme === 'dark' ? 4 : 6]
			: theme.colorScheme === 'dark'
				? theme.colors.dark[0]
				: theme.colors.gray[7]
}

function ImageUploadIcon({status, ...props}: ComponentProps<TablerIcon> & {status: DropzoneStatus}) {
	if (status.accepted) {
		return <Upload {...props} />
	}

	if (status.rejected) {
		return <X {...props} />
	}

	return <Photo {...props} />
}

const dropzoneChildren = (status: DropzoneStatus, theme: MantineTheme) => (
	<Group position='center' spacing='xl' style={{minHeight: 220, pointerEvents: 'none'}} direction='row' noWrap>
		<ImageUploadIcon status={status} style={{color: getIconColor(status, theme)}} size={80}/>
		<div>
			<Text size='xl' inline>
				Добавьте картинки
			</Text>
		</div>
	</Group>
)

export const CreatePage: FC = () => {
	const form = useForm<ICreate>({
		initialValues: {
			title: '',
			description: '',
		},
		validationRules: {
			title: value => /^\S+$/.test(value),
			description: value => /^\S+$/.test(value),
		},
		errorMessages: {
			title: 'Заголовок не может быть пустым',
			description: 'Описание не может быть пустым',
		},
	})
	const theme = useMantineTheme()

	const onDrop = () => {

	}

	return (
		<Box mx='auto' mt='lg'>
			<form onSubmit={form.onSubmit(values => console.log(values))}>
				<TextInput label='Заголовок' {...form.getInputProps('title')} mb='md'/>
				<Textarea label='Описание' {...form.getInputProps('description')} mb='md'/>
				<Dropzone onDrop={onDrop}>
					{(status) => dropzoneChildren(status, theme)}
				</Dropzone>
				<Group position='center' mt='md'>
					<Button type='submit'>Создать</Button>
				</Group>
			</form>
		</Box>
	)
}
