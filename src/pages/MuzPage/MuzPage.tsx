import {Grid} from '@mantine/core'
import {FC} from 'react'
import {PostCard} from '../../components/PostCard'

export const MuzPage: FC = () => {
	return (
		<Grid>
			<Grid.Col>
				<PostCard
					title='Заголовок'
					description='Lorem ipsum dolor \nsit amet,\n consectetur adipisicing elit.\n Ad dicta\n\n dolor ex mollitia odio provident!'
					images={['https://images.unsplash.com/photo-1649658166972-700ce4339205?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80',
						'https://images.unsplash.com/photo-1500621137413-1a61d6ac1d44?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80']}
				/>
			</Grid.Col>
			<Grid.Col>
				<PostCard
					title='Заголовок'
					description='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad dicta dolor ex mollitia odio provident!'
					images={['https://images.unsplash.com/photo-1649658166972-700ce4339205?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80',
						'https://images.unsplash.com/photo-1500621137413-1a61d6ac1d44?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80']}
				/>
			</Grid.Col>
			<Grid.Col>
				<PostCard
					title='Заголовок'
					description='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad dicta dolor ex mollitia odio provident!'
					images={['https://images.unsplash.com/photo-1649658166972-700ce4339205?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80',
						'https://images.unsplash.com/photo-1500621137413-1a61d6ac1d44?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80']}
				/>
			</Grid.Col>
			<Grid.Col>
				<PostCard
					title='Заголовок'
					description='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad dicta dolor ex mollitia odio provident!'
					images={['https://images.unsplash.com/photo-1649658166972-700ce4339205?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80',
						'https://images.unsplash.com/photo-1500621137413-1a61d6ac1d44?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80']}
				/>
			</Grid.Col>
		</Grid>
	)
}