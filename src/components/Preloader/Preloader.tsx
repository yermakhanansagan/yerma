import {LoadingOverlay} from '@mantine/core'
import {FC} from 'react'
import s from './Preloader.module.css'

export const Preloader: FC = () => (
	<div className={s.wrapper}>
		<LoadingOverlay visible/>
	</div>
)
