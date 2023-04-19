import { CssBaseline, ThemeProvider } from '@mui/material';
import { Header } from './components/Header';
import Routers from './components/Routers';
import { theme } from './theme';

function App() {
	return (
		<>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<Header />
				<Routers />
			</ThemeProvider>
		</>
	);
}

export default App;
