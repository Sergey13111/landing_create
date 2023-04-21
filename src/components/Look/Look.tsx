import { Typography } from '@mui/material';

const Look: React.FC = () => {
	return (
		<>
			<Typography
				component='span'
				sx={{
					position: 'relative',
					fontSize: 65,
					fontWeight: 500,
					px: 1.5,
					py: 2.5,
					zIndex: 1,
					backgroundColor: '#BAFD37',
					borderRadius: 2,
					display: 'inline-block',
					transform: 'rotate(10.48deg)',
				}}>
				LOOK
				<Typography
					sx={{
						fontSize: 65,
						display: 'inline-block',
						fontWeight: 500,
						position: 'absolute',
						top: 7,
						right: -10,
					}}>
					*
				</Typography>
			</Typography>
		</>
	);
};

export default Look;
