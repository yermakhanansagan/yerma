import {Grid} from '@mantine/core'
import {observer} from 'mobx-react-lite'
import {FC} from 'react'
import {PostCard} from '../../components'
import {postsState} from '../../store'

export const MuzPage: FC = observer(() => {
	return (
		<Grid>
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
