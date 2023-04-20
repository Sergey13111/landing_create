import { Button, ButtonProps } from '@mui/material';
import { styled } from '@mui/material/styles';

const CustomButton = styled(Button)<ButtonProps>(({ theme }) => ({
	width: '55px',
	height: '55px',
	fontSize: '0',
	minWidth: '0',
	padding: '5px',
	backgroundColor: theme.palette.primary.dark,
	color: theme.palette.secondary.contrastText,
	border: `1px solid ${theme.palette.background.default}`,
	borderRadius: '50%',
	boxShadow: 'none',
	'&:hover': {
		backgroundColor: theme.palette.grey[300],
	},
}));

const ButtonApp: React.FC<ButtonProps> = ({ children, ...rest }) => {
	return (
		<CustomButton
			variant='contained'
			{...rest}>
			{children}
		</CustomButton>
	);
};

export default ButtonApp;
