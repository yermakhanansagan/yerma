import {Card, Group, Image, Text} from '@mantine/core'
import {FC} from 'react'

interface Props {
	firstName: string
	lastName: string
	description: string
	image: string
	group?: string,
	bDay?: string,
	dDay?: string,
}

export const ProfileCard: FC<Props> = ({bDay, dDay, firstName, lastName, description, image, group}) => {
	return (
		<Card shadow='sm' p='xl'>
			<Group position='left'>
				<Image src={image} height={160} alt='профиль'/>
			<div>
			<Text weight={500} size='lg'>
				{`${firstName} ${lastName}`}
			</Text>
			{group ? 
				<Text>
					{group}
				</Text>
				 : null}
			{dDay ? <Text>{bDay} - {dDay}</Text> : null}
			<Text size='sm'>
				{description}
			</Text>
			</div>
			</Group>
		</Card>
	)
}
