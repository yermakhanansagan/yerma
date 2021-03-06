import {Grid} from '@mantine/core'
import {FC} from 'react'
import {ProfileCard} from '../../components'

export const MemoryPage: FC = () => {
	return (
		<Grid>
			<Grid.Col>
				<ProfileCard
					birthDate={1945}
					firstName='Name'
					lastName='Surname'
					description='Blabla'
					image='https://images.unsplash.com/photo-1649601324284-8ddf6f0e838b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
				/>
			</Grid.Col>
		</Grid>
	)
}
