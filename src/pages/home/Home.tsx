import { Box, Container, Grid, Paper, SvgIcon, Typography } from '@mui/material';
import { ButtonApp } from '../../components/ButtonApp';
import { ReactComponent as iconApple } from '../../assets/iconApple.svg';
import { ReactComponent as iconAndroid } from '../../assets/iconAndroid.svg';
import { Slider } from '../../components/Slider';
import { Look } from '../../components/Look';
import { Mask } from '../../components/Mask';

const Home = () => {
	return (
		<Container>
			<Grid container>
				<Grid
					item
					xs={6}>
					<Box
						sx={{
							height: '100%',
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'space-between',
						}}>
						<Box sx={{ display: 'flex', flexDirection: 'column' }}>
							<Box sx={{ mb: 1.5 }}>
								<ButtonApp sx={{ marginRight: '-4px' }}>
									<SvgIcon
										component={iconApple}
										viewBox='0 0 27 27'
									/>
								</ButtonApp>
								<ButtonApp sx={{ marginLeft: '-4px' }}>
									<SvgIcon
										component={iconAndroid}
										viewBox='0 0 27 27'
									/>
								</ButtonApp>
							</Box>
							<Typography
								variant='h5'
								component='span'>
								App available
							</Typography>
						</Box>
						<Box sx={{ pr: 2 }}>
							<Typography
								variant='h1'
								component='h1'
								sx={{ fontSize: { xs: 36, sm: 54, lg: 65 } }}>
								CHOOSE YOUR WINTER <Look /> APPAREL
							</Typography>
						</Box>
					</Box>
				</Grid>
				<Grid
					item
					xs={6}>
					<Mask />
				</Grid>
			</Grid>
			<Box
				mb={20}
				mt={17}>
				<Paper
					elevation={0}
					sx={{ pt: 5, pb: 12.5 }}>
					<Box
						mb={6}
						sx={{ textAlign: 'center' }}>
						<Typography
							variant='h2'
							component='h2'
							mb={6.5}
							sx={{ fontSize: { xs: 24, sm: 34, lg: 54 } }}>
							CHOOSE LOOKS
						</Typography>
						<Box sx={{ minWidth: 0 }}>
							<Slider />
						</Box>
					</Box>
					<Box px={6}>
						<Typography
							variant='h2'
							component='h2'
							mb={7.5}
							sx={{ textAlign: 'center', fontSize: { xs: 24, sm: 34, lg: 54 } }}>
							MORE ABOUT US
						</Typography>
						<Typography
							variant='body1'
							component='p'
							pb={3}>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sed enim sed libero
							commodo efficitur. Suspendisse et lorem ac neque dictum pellentesque nec sit amet
							nisl. Fusce rutrum quis purus ut pretium. Vivamus ornare mauris non ligula egestas,
							accumsan faucibus quam sollicitudin. Duis efficitur lorem tellus. Aliquam non rhoncus
							felis, porttitor consequat quam. Morbi gravida semper mattis. Nunc ultrices justo in
							pulvinar convallis. Curabitur dapibus ut tellus eu condimentum. Morbi vitae convallis
							purus, ac finibus ipsum.
						</Typography>
						<Typography
							variant='body1'
							component='p'>
							Suspendisse nec pharetra turpis. Aenean id nunc id orci aliquam pulvinar eget vitae
							nisl. In ligula neque, vestibulum vel arcu eu, eleifend vestibulum tortor. Duis
							facilisis, est et aliquam dapibus, urna mauris sagittis mi, et mattis metus magna vel
							tellus. Phasellus sit amet volutpat ante, ut condimentum lorem. Quisque auctor
							sollicitudin dui, vitae egestas nunc suscipit et. Nullam eu quam sem. Donec a nibh
							molestie, aliquam libero maximus, feugiat velit. Curabitur ac accumsan velit. In hac
							habitasse platea dictumst.
						</Typography>
					</Box>
				</Paper>
			</Box>
		</Container>
	);
};

export default Home;
