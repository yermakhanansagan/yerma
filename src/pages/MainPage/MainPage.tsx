import {FC} from 'react'
import {Slider} from '../../components/Slider'

export const MainPage: FC = ({}) => {
	return (
		<Slider
			images={[
				'https://images.unsplash.com/photo-1648737119422-2680a7e39089?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80',
				'https://images.unsplash.com/photo-1649877674135-49cd721d4e3b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
				'https://images.unsplash.com/photo-1649878200204-9c08cda26d4d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
				'https://images.unsplash.com/photo-1642557581366-539b6fed5998?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
			]}
		/>
	)
}
