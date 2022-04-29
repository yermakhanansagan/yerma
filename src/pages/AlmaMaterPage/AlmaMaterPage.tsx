import {Grid} from '@mantine/core'
import {observer} from 'mobx-react-lite'
import {FC} from 'react'
import {Gaudeamus, PostCard} from '../../components'
import {postsState} from '../../store'

export const AlmaMaterPage: FC = observer(() => {
	return (
		<Grid>
			<Gaudeamus/>
			{postsState.posts.map(({uuid, name, description, author, images}) => (
				<Grid.Col key={uuid}>
					<PostCard title={name} description={description} author={author}
						images={images.map(img => img.image)}
					/>
				</Grid.Col>
			))}
		</Grid>
	)
})
