import {LoadingOverlay} from '@mantine/core'
import {FC} from 'react'
import s from './Preloader.module.css'

// FIXME

export const Preloader: FC = () => {
	return (
		<div className={s.wrapper}>
			<LoadingOverlay visible/>
		</div>
	)
}
