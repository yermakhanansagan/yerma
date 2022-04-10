import {Card, Image, Text} from '@mantine/core'
import {FC} from 'react'

interface Props {
	firstName: string
	lastName: string
	description: string
	imgSrc: string
}

export const ProfileCard: FC<Props> = ({firstName, lastName, description, imgSrc}) => {
	return (
		<Card shadow='sm' p='xl'>
			<Card.Section>
				<Image src={imgSrc} height={160} alt='профиль'/>
			</Card.Section>
			<Text weight={500} size='lg'>
				{`${firstName} ${lastName}`}
			</Text>
			<Text size='sm'>
				{description}
			</Text>
		</Card>
	)
}
