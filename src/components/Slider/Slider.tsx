import {Image} from '@mantine/core'
import {FC} from 'react'
import 'swiper/css'
import {Swiper, SwiperSlide} from 'swiper/react'

interface Props {
	images: string[]
}

export const Slider: FC<Props> = ({images}) => {
	return (
		<Swiper spaceBetween={50} slidesPerView={1}>
			{images.map((image, index) => (
				<SwiperSlide key={index}>
					<Image height={400} fit='cover' radius='md' src={image} alt='image'/>
				</SwiperSlide>
			))}
		</Swiper>
	)
}
