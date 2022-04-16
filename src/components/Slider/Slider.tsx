import {Image, MantineNumberSize} from '@mantine/core'
import {FC, useState} from 'react'
import 'swiper/css'
import {Swiper, SwiperSlide} from 'swiper/react'
import s from './Slider.module.css'
import {SliderButton} from './SliderButton'

interface Props {
	images: string[]
	radius?: MantineNumberSize
	spaceBetween?: number
}

export const Slider: FC<Props> = ({images, radius, spaceBetween}) => {
	const [count, setCount] = useState(0)

	const increaseCount = () => {
		if (count < images.length - 1) {
			setCount(prev => prev + 1)
		}
	}

	const decreaseCount = () => {
		if (count > 0) {
			setCount(prev => prev - 1)
		}
	}

	return (
		<Swiper spaceBetween={spaceBetween || 0} slidesPerView={1} className={s.wrapper}>
			{count > 0 && (
				<SliderButton type='prev' increaseCount={increaseCount} decreaseCount={decreaseCount}/>
			)}
			{count < images.length - 1 && (
				<SliderButton type='next' increaseCount={increaseCount} decreaseCount={decreaseCount}/>
			)}
			{images.map((image, index) => (
				<SwiperSlide key={index}>
					<Image height={400} fit='cover' radius={radius} src={image} alt='image'/>
				</SwiperSlide>
			))}
		</Swiper>
	)
}
