import { createTheme } from '@mui/material';

export const theme = createTheme({
	palette: {
		background: {
			default: '#E1E3E9',
			paper: '#fff',
		},

		primary: {
			main: '#000',
			light: '#fff',
			dark: '#2D3240',
		},
		secondary: {
			main: '#F54329',
			contrastText: '#fff',
			dark: '#bc1b04fc',
		},
		grey: {
			300: '#2d3240ab',
		},
		info: {
			main: '#BAFD37',
		},
	},

	components: {
		MuiAppBar: {
			styleOverrides: {
				root: {
					boxShadow: 'none',
				},
			},
		},
		MuiToolbar: {
			styleOverrides: {
				root: {
					maxWidth: '1216px',
					margin: '0 auto',
					width: '100%',
				},
			},
		},
	},

	typography: {
		fontFamily: ['Roboto', 'sans-serif'].join(','),
		fontSize: 16,
		h1: {
			fontFamily: ['Oswald', 'sans-serif'].join(','),
			fontSize: 65,
			fontWeight: 500,
		},
		h2: {
			fontFamily: ['Oswald', 'sans-serif'].join(','),
			fontSize: 54,
			fontWeight: 500,
		},
		h3: {
			fontFamily: ['Oswald', 'sans-serif'].join(','),
			fontSize: 30,
			fontWeight: 500,
		},
		h4: {
			fontFamily: ['Oswald', 'sans-serif'].join(','),
			fontSize: 25,
			fontWeight: 500,
		},
		h5: {
			fontFamily: ['Roboto', 'sans-serif'].join(','),
			lineHeight: '21px',
			fontSize: 18,
			fontWeight: 400,
		},

		body1: {
			lineHeight: '27px',
			fontSize: 16,
		},
	},
});
