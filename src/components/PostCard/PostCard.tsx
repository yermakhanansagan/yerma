import {Card, Image, Text} from '@mantine/core'
import {FC} from 'react'

interface Props {
	title: string
	description: string
	images: string[]
}

export const PostCard: FC<Props> = ({title, description, images}) => {
	return (
		<Card shadow='xl' p='xl'>
			{images.map((image, index) => (
				<Card.Section mb='sm' key={index}>
					<Image src={image} height={160} alt='новость' fit='cover'/>
				</Card.Section>
			))}
			<Text weight={500} size='lg'>
				{title}
			</Text>
			<Text size='sm'>
				{description}
			</Text>
		</Card>
	)
}
