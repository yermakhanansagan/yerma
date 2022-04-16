import {ActionIcon} from '@mantine/core'
import clsx from 'clsx'
import {FC, useEffect} from 'react'
import {useSwiper} from 'swiper/react'
import {ChevronLeft, ChevronRight} from 'tabler-icons-react'
import s from './Slider.module.css'

interface Props {
	type: 'prev' | 'next'
	increaseCount: () => void
	decreaseCount: () => void
}

export const SliderButton: FC<Props> = ({type, increaseCount, decreaseCount}) => {
	const swiper = useSwiper()

	const onClick = () => {
		if (type === 'prev') {
			swiper.slidePrev()
			decreaseCount()
		} else {
			swiper.slideNext()
			increaseCount()
		}
	}

	useEffect(() => {
		swiper.allowTouchMove = false
	}, [])

	return (
		<ActionIcon
			className={clsx(s.button, type === 'prev' ? s.prevButton : s.nextButton)} variant='filled' onClick={onClick}
			radius={0}
		>
			{type === 'prev' ? (
				<ChevronLeft size={40} className={s.icon}/>
			) : (
				<ChevronRight size={40} className={s.icon}/>
			)}
		</ActionIcon>
	)
}
