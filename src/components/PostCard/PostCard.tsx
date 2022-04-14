import {Card, Image, Text} from '@mantine/core'
import {FC} from 'react'

interface Props {
	title: string
	description: string
	images?: string[]
	author?: string
}

export const PostCard: FC<Props> = ({title, description, images, author}) => {
	return (
		<Card shadow='xl' p='xl'>
			{images?.map((image, index) => (
				<Card.Section mb='sm' key={index}>
					<Image src={image} height={160} alt='новость' fit='cover'/>
				</Card.Section>
			))}
			<Text weight={500} size='lg'>
				{title}
			</Text>
			{author ? (
				<Text>
					Автор: {author}
				</Text>
			) : null}
			<Text size='sm'>
				{description}
			</Text>
		</Card>
	)
}
