import { Box, Container, Grid, Paper, SvgIcon, Typography } from '@mui/material';
import { ReactComponent as iconApple } from '../../assets/iconApple.svg';
import { ReactComponent as iconAndroid } from '../../assets/iconAndroid.svg';
import { Slider } from '../../components/Slider';
import { Look } from '../../components/Look';
import { Mask } from '../../components/Mask';
import styles from './Home.module.css';
import { motion } from 'framer-motion';
import { MButtonApp } from '../../components/ButtonApp/ButtonApp';
import { forwardRef } from 'react';

const textAnimation = {
	hidden: {
		x: -100,
		opacity: 0,
	},
	visible: (custom: number) => ({
		x: 0,
		opacity: 1,
		transition: { delay: custom * 0.2 },
	}),
};

const textYAnimation = {
	hidden: {
		y: 100,
		opacity: 0,
	},
	visible: (custom: number) => ({
		y: 0,
		opacity: 1,
		transition: { delay: custom * 0.2 },
	}),
};

const MTypography = motion(Typography);

const Home: React.FC = forwardRef(() => {
	return (
		<motion.div
			initial='hidden'
			whileInView='visible'
			viewport={{ amount: 0.2 }}>
			<Container>
				<Grid container>
					<Box sx={{ position: 'absolute', left: 0, right: 0, width: '100%' }}>
						<svg
							width='2000'
							height='349'
							viewBox='0 0 2000 349'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'>
							<path
								className={styles.line}
								d='M-152 182.966C-141.998 182.966 -122.94 198.142 -122.94 198.142C-107.619 204.762 -83.7083 215.094 -83.7083 215.094C-83.7083 215.094 -52.8058 227.298 -32.2069 232.369C-10.1537 237.798 25.2679 241.248 25.2679 241.248C98.651 247.066 170.343 261.713 211.254 210.574C218.413 201.625 221.166 185.872 205.442 185.872C189.586 185.872 182.421 189.718 169.116 196.043C146.303 206.889 124.942 223.371 121.328 239.634C116.413 261.753 111.913 302.171 126.979 321.003C149.659 349.353 240.314 345.543 240.314 345.543C240.314 345.543 332.302 343.21 389.813 331.82C414.519 326.927 452.454 316.482 452.454 316.482L530.917 286.938L627.072 247.5C627.072 247.5 657.513 231.592 677.072 221.5C706.096 206.524 751.572 183.5 751.572 183.5C751.572 183.5 789.041 166.71 813.072 156C843.587 142.399 891.265 121.294 891.265 121.294C891.265 121.294 935.835 105.191 958.104 97.2384C975.23 91.122 993.641 88.0635 1010.41 80.6095C1030.66 71.6103 1074.18 62.5275 1074.18 62.5275C1074.18 62.5275 1116.58 49.7304 1144.09 42.8311C1194.56 30.1743 1322.95 17.0417 2000 3'
								stroke='#647CE9'
								x1='0'
								x2='100%'
								stroke-width='6'
								stroke-linecap='round'
							/>
						</svg>
					</Box>
					<Grid
						item
						xs={12}
						lg={6}>
						<Box
							sx={{
								height: '100%',
								display: 'flex',
								flexDirection: 'column',
								justifyContent: 'space-between',
							}}>
							<Box sx={{ display: 'flex', flexDirection: 'column' }}>
								<Box sx={{ mb: 1.5 }}>
									<MButtonApp
										custom={2}
										variants={textAnimation}
										sx={{ marginRight: '-4px' }}>
										<SvgIcon
											component={iconApple}
											viewBox='0 0 27 27'
										/>
									</MButtonApp>

									<MButtonApp
										custom={1}
										variants={textAnimation}
										sx={{ marginLeft: '-4px' }}>
										<SvgIcon
											component={iconAndroid}
											viewBox='0 0 27 27'
										/>
									</MButtonApp>
								</Box>
								<MTypography
									variant='h5'
									custom={3}
									variants={textAnimation}>
									App available
								</MTypography>
							</Box>
							<Box sx={{ pr: 2 }}>
								<MTypography
									variant='h1'
									custom={2}
									variants={textAnimation}
									sx={{
										fontSize: { xs: 36, sm: 54, lg: 65 },
									}}>
									CHOOSE YOUR WINTER <Look /> APPAREL
								</MTypography>
							</Box>
						</Box>
					</Grid>
					<Grid
						item
						xs={12}
						lg={6}
						sx={{ display: 'flex', justifyContent: { md: 'center', xs: 'center' } }}>
						<Mask />
					</Grid>
				</Grid>
				<Box
					mb={20}
					mt={17}>
					<Paper
						elevation={0}
						sx={{ pt: 5, pb: 12.5 }}>
						<motion.div
							initial='hidden'
							whileInView='visible'
							viewport={{ amount: 0.1 }}>
							<Box
								mb={6}
								sx={{ textAlign: 'center' }}>
								<MTypography
									variant='h2'
									custom={1}
									variants={textYAnimation}
									mb={6.5}
									sx={{ fontSize: { xs: 24, sm: 34, lg: 54 } }}>
									CHOOSE LOOKS
								</MTypography>
								<Box sx={{ minWidth: 0 }}>
									<Slider />
								</Box>
							</Box>
						</motion.div>
						<motion.div
							initial='hidden'
							whileInView='visible'
							viewport={{ amount: 0.1 }}>
							<Box px={6}>
								<MTypography
									variant='h2'
									custom={1}
									variants={textYAnimation}
									mb={7.5}
									sx={{ textAlign: 'center', fontSize: { xs: 24, sm: 34, lg: 54 } }}>
									MORE ABOUT US
								</MTypography>
								<MTypography
									variant='body1'
									custom={2}
									variants={textAnimation}
									pb={3}>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sed enim sed libero
									commodo efficitur. Suspendisse et lorem ac neque dictum pellentesque nec sit amet
									nisl. Fusce rutrum quis purus ut pretium. Vivamus ornare mauris non ligula
									egestas, accumsan faucibus quam sollicitudin. Duis efficitur lorem tellus. Aliquam
									non rhoncus felis, porttitor consequat quam. Morbi gravida semper mattis. Nunc
									ultrices justo in pulvinar convallis. Curabitur dapibus ut tellus eu condimentum.
									Morbi vitae convallis purus, ac finibus ipsum.
								</MTypography>
								<MTypography
									variant='body1'
									custom={3}
									variants={textAnimation}>
									Suspendisse nec pharetra turpis. Aenean id nunc id orci aliquam pulvinar eget
									vitae nisl. In ligula neque, vestibulum vel arcu eu, eleifend vestibulum tortor.
									Duis facilisis, est et aliquam dapibus, urna mauris sagittis mi, et mattis metus
									magna vel tellus. Phasellus sit amet volutpat ante, ut condimentum lorem. Quisque
									auctor sollicitudin dui, vitae egestas nunc suscipit et. Nullam eu quam sem. Donec
									a nibh molestie, aliquam libero maximus, feugiat velit. Curabitur ac accumsan
									velit. In hac habitasse platea dictumst.
								</MTypography>
							</Box>
						</motion.div>
					</Paper>
				</Box>
			</Container>
		</motion.div>
	);
});

export default Home;
