import {Grid} from '@mantine/core'
import {FC} from 'react'
import {PostCard} from '../../components/PostCard'

export const TalesPage: FC = () => {
	return (
		<Grid>
			<Grid.Col>
				<PostCard
					title='Заголовок'
					author='Yermakhan'
					description='        ЧИТАТЕЛЮ
					Прошло немногим более 20 лет с момента завершения в России глобального эксперимента на тему возможно ли  людям жить под тотальным контролем государства и не иметь почти никакой собственности при этом. Мне как свидетелю времен , так называемого развитого социализма хотелось бы поделиться воспоминаниями о 70-х годах прошлого столетия . Сейчас, когда  процесс оцифровывания исторических и литературных  материалов  в глобальной мировой сети достиг немалых высот своего логического развития,  появилась возможность знакомиться с воспоминаниями очевидцев и участников многих исторических событий. Появилась возможность получить сведения о жизни и быте далеких от нас времен не через призму оглупляющей государственной пропаганды, а что называется из первых рук. Написанные  много лет назад мемуары дают реальное  представление о том, как же все было на самом деле,  порой внося ясность через мелкие бытовые детали ,  с высоты нашего времени приобретающие совершенно определенный смысл. Надеюсь, что и мои воспоминания покажутся кому-нибудь интересными  и помогут понять причины тех или иных явлений русской действительности.
				'
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
