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

const images = [im4, im3, im2, im, im1];

const Mask: React.FC = () => {
	return (
		<>
			<Box className={styles.sliderContainer}>
				<Box sx={{ mb: 10, width: '100%', height: '100%' }}>
					<img
						src={imMas}
						alt='Looks'
						className={styles.maskWrapper}
					/>
					<SvgIcon
						component={create}
						viewBox='0 0 525 257'
					/>
				</Box>
			</Box>
		</>
	);
};

export default Mask;
