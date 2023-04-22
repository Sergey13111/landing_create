import { Navigation, FreeMode } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import im from '../../assets/im.png';
import im1 from '../../assets/im1.png';
import im2 from '../../assets/im2.png';
import im3 from '../../assets/im3.png';
import im4 from '../../assets/im4.png';
import { Box } from '@mui/material';

const images = [im4, im3, im2, im, im1, im2];

const Slider: React.FC = () => {
	return (
		<>
			<Swiper
				modules={[Navigation, FreeMode]}
				slidesPerView={4.3}
				spaceBetween={30}
				watchOverflow={true}
				freeMode={true}
				navigation={{
					nextEl: '.swiper-button-next, .next',
					prevEl: '.swiper-button-prev',
				}}
				initialSlide={2}
				breakpoints={{
					320: {
						slidesPerView: 1,
						spaceBetween: 0,
					},
					800: {
						slidesPerView: 2,
						spaceBetween: 5,
					},
					992: {
						slidesPerView: 3,
						spaceBetween: 10,
					},
					1200: {
						slidesPerView: 4.3,
						spaceBetween: 30,
					},
					1536: {
						slidesPerView: 4.3,
						spaceBetween: 30,
					},
				}}>
				{images.map((image, index) => (
					<SwiperSlide key={index}>
						<img
							src={image}
							alt={`Slide ${index}`}
							style={{
								width: '100%',
								maxWidth: '239px',
								height: '304px',
								borderRadius: 0,
							}}
						/>
					</SwiperSlide>
				))}
				<Box
					className='swiper-button-prev'
					sx={{
						position: 'absolute',
						width: 76,
						height: 76,
						left: -22,
						borderRadius: '50%',
						boxShadow: '0px 2px 1px rgba(0, 0, 0, 0.25)',
						backgroundColor: '#fff',
						color: '#888',
						zIndex: 1000,
					}}></Box>
				<Box
					className='swiper-button-next'
					sx={{
						position: 'absolute',
						width: 76,
						height: 76,
						right: -22,
						borderRadius: '50%',
						boxShadow: '0px 2px 1px rgba(0, 0, 0, 0.25)',
						backgroundColor: '#fff',
						color: '#888',
						zIndex: 1000,
					}}></Box>
			</Swiper>
		</>
	);
};
export default Slider;
