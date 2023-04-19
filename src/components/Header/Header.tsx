import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import {
	AppBar,
	Box,
	CssBaseline,
	Divider,
	Drawer,
	List,
	ListItem,
	ListItemButton,
	ListItemText,
	Toolbar,
	Typography,
	Button,
	SvgIcon,
	IconButton,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { ReactComponent as logoLand } from '../../assets/logoLand.svg';
import { ButtonBuy } from '../ButtonBuy';

const Header: React.FC = () => {
	const drawerWidth = 240;

	const navItems = [
		<NavLink to='Clothes'>
			<Typography
				variant='h5'
				component='span'
				sx={{ textTransform: 'none', mx: { lg: 6, sm: 1 } }}>
				Clothes
			</Typography>
		</NavLink>,
		<NavLink to='Sneakers'>
			<Typography
				variant='h5'
				component='span'
				sx={{ textTransform: 'none', mx: { lg: 5, sm: 1 } }}>
				Sneakers
			</Typography>
		</NavLink>,
		<NavLink to='Bags'>
			<Typography
				variant='h5'
				component='span'
				sx={{ textTransform: 'none', mx: { lg: 6, sm: 1 } }}>
				Bags
			</Typography>
		</NavLink>,
		<NavLink to='Accessorize'>
			<Typography
				variant='h5'
				component='span'
				sx={{ textTransform: 'none', mx: { lg: 6, sm: 1 } }}>
				Accessorize
			</Typography>
		</NavLink>,
	];

	const [mobileOpen, setMobileOpen] = useState(false);

	const handleDrawerToggle = () => {
		setMobileOpen((prevState) => !prevState);
	};

	const drawer = (
		<Box
			onClick={handleDrawerToggle}
			sx={{ textAlign: 'center' }}>
			<Link to='/'>
				<SvgIcon
					component={logoLand}
					viewBox='0 0 170 18'
					sx={{ fontSize: 80 }}
				/>
			</Link>

			<Divider />
			<List>
				{navItems.map((item, index) => (
					<ListItem
						key={index}
						disablePadding>
						<ListItemButton sx={{ textAlign: 'center' }}>
							<ListItemText primary={item} />
						</ListItemButton>
					</ListItem>
				))}
				<ButtonBuy sx={{ mt: 1 }}>BUY</ButtonBuy>
			</List>
		</Box>
	);

	return (
		<>
			<CssBaseline />
			<AppBar
				position='static'
				color='transparent'>
				<Toolbar sx={{ display: 'flex', justifyContent: 'space-between', py: 6 }}>
					<IconButton
						color='inherit'
						aria-label='open drawer'
						edge='start'
						onClick={handleDrawerToggle}
						sx={{ mr: 2, display: { sm: 'none' } }}>
						<MenuIcon />
					</IconButton>
					<Link to='/'>
						<SvgIcon
							component={logoLand}
							viewBox='0 0 168 33'
							sx={{ fontSize: 80, width: { lg: 170, sm: 100 }, height: 45 }}
						/>
					</Link>

					<Box sx={{ display: { xs: 'none', sm: 'flex' } }}>
						{navItems.map((item, index) => (
							<Button key={index}>{item}</Button>
						))}
						<ButtonBuy sx={{ ml: { lg: 5, sm: 1 } }}>BUY</ButtonBuy>
					</Box>
				</Toolbar>
			</AppBar>
			<Box component='nav'>
				<Drawer
					variant='temporary'
					open={mobileOpen}
					onClose={handleDrawerToggle}
					ModalProps={{
						keepMounted: true,
					}}
					sx={{
						display: { xs: 'block', sm: 'none' },
						'& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
					}}>
					{drawer}
				</Drawer>
			</Box>
		</>
	);
};

export default Header;
