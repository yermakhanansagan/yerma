import {Box, Button, Group, MantineTheme, Text, Textarea, TextInput, useMantineTheme} from '@mantine/core'
import {Dropzone, DropzoneStatus, IMAGE_MIME_TYPE} from '@mantine/dropzone'
import {useForm} from '@mantine/hooks'
import {ComponentProps, FC, useRef} from 'react'
import {useSearchParams} from 'react-router-dom'
import {Icon as TablerIcon, Photo, Upload, X} from 'tabler-icons-react'
import {PostsService} from '../../services'
import {authState} from '../../store'
import {ICreate, PostCategoryEnum} from '../../types'

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

const Category: Record<string, PostCategoryEnum> = {
	essays: PostCategoryEnum.ESSAY,
	education: PostCategoryEnum.EDUCATION,
	career: PostCategoryEnum.CAREER,
	tales: PostCategoryEnum.TALE,
	gallery: PostCategoryEnum.GALLERY,
	muz: PostCategoryEnum.MUSE,
}

export const CreatePage: FC = () => {
	const form = useForm<ICreate>({
		initialValues: {
			title: '',
			description: '',
		},
		validationRules: {
			title: value => /^[\S\s]+$/.test(value),
			description: value => /^[\S\s]+$/.test(value),
		},
		errorMessages: {
			title: 'Заголовок не может быть пустым',
			description: 'Описание не может быть пустым',
		},
	})
	const theme = useMantineTheme()
	const ref = useRef<FormData | null>(null)
	const params = useSearchParams()[0]

	const onDrop = (files: File[]) => {
		ref.current = new FormData()
		for (const file of files) {
			ref.current?.append('images[]', file, file.name)
		}
	}

	const onSubmit = form.onSubmit(async values => {
		ref.current?.append('author', authState.user?.uuid!)
		ref.current?.append('name', values.title)
		ref.current?.append('description', values.description)
		const category = params.get('category') || ''
		if (category) {
			ref.current?.append('category', Category[category])
		}
		console.log(...ref.current!)
		const response = await PostsService.createPost(ref.current!)
		console.log(response)
	})

	return (
		<Box mx='auto' mt='lg'>
			<form onSubmit={onSubmit}>
				<TextInput label='Заголовок' {...form.getInputProps('title')} mb='md'/>
				<Textarea label='Описание' {...form.getInputProps('description')} mb='md' autosize/>
				<Dropzone onDrop={onDrop} accept={IMAGE_MIME_TYPE} maxSize={5 * 1024 ** 2}>
					{(status) => dropzoneChildren(status, theme)}
				</Dropzone>
				<Group position='center' mt='md'>
					<Button type='submit'>Создать</Button>
				</Group>
			</form>
		</Box>
	)
}
