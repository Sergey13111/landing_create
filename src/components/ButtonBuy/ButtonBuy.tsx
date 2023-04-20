import { Button, ButtonProps } from '@mui/material';
import { styled } from '@mui/material/styles';

const CustomButton = styled(Button)<ButtonProps>(({ theme }) => ({
	fontFamily: 'Oswald',
	fontWeight: '700',
	fontSize: '34px',
	maxWidth: '106px',
	width: '100%',
	minHeight: '106px',

	backgroundColor: theme.palette.secondary.main,
	color: theme.palette.secondary.contrastText,
	padding: '15px',
	borderRadius: '50%',
	boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.25)',
	transform: 'rotate(19.5deg)',
	'&:hover': {
		backgroundColor: theme.palette.secondary.dark,
	},

	[theme.breakpoints.down('md')]: {
		padding: '23px',
		fontSize: '10px',
		maxWidth: '10px',
		minHeight: '10px',
	},
}));

const ButtonBuy: React.FC<ButtonProps> = ({ children, ...rest }) => {
	return (
		<CustomButton
			variant='contained'
			{...rest}>
			{children}
		</CustomButton>
	);
};

export default ButtonBuy;
