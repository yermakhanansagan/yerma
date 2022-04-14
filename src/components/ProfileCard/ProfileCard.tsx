import {Card, Group, Image, Text} from '@mantine/core'
import {FC} from 'react'

interface Props {
	firstName: string
	lastName: string
	description: string
	image: string
	group?: string,
	birthDate?: number,
}

export const ProfileCard: FC<Props> = ({birthDate, firstName, lastName, description, image, group}) => {
	return (
		<Card shadow='sm' p='xl'>
			<Group position='left'>
				<Image src={image} height={160} alt='профиль'/>
				<div>
					<Text weight={500} size='lg'>
						{firstName + ' ' + lastName}
					</Text>
					{group && (
						<Text>
							{group}
						</Text>
					)}
					{birthDate && (
						<Text>
							{birthDate}
						</Text>
					)}
					<Text size='sm'>
						{description}
					</Text>
				</div>
			</Group>
		</Card>
	)
}
