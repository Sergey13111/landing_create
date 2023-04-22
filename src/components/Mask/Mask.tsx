import { Box, SvgIcon } from '@mui/material';
import 'swiper/swiper-bundle.min.css';
import styles from './Mask.module.css';

import im from '../../assets/im.png';
import im1 from '../../assets/im1.png';
import im2 from '../../assets/im2.png';
import im3 from '../../assets/im3.png';
import im4 from '../../assets/im4.png';
import imMas from '../../assets/imMas.png';

import { ReactComponent as create } from '../../assets/create.svg';
import { Autoplay, FreeMode, Navigation } from 'swiper';
import { SwiperSlide, Swiper } from 'swiper/react';

const images = [imMas, im4, im3, im2, im, im1];

const Mask: React.FC = () => {
	return (
		<>
			<Box className={styles.sliderContainer}>
				<Box sx={{ mb: 10, width: '100%', height: '100%', position: 'relative' }}>
					<SvgIcon
						component={create}
						viewBox='0 0 525 257'
					/>

					<Swiper
						slidesPerView={1}
						freeMode
						autoplay
						modules={[Navigation, FreeMode, Autoplay]}>
						{images.map((image, index) => (
							<SwiperSlide key={index}>
								<img
									src={image}
									alt={`Slide ${index}`}
									className={styles.maskWrapper}
								/>
							</SwiperSlide>
						))}
					</Swiper>
				</Box>
			</Box>
		</>
	);
};

export default Mask;
