import './styles/globals.scss';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Login from './components/Login';
import { Routes, Route } from "react-router-dom";
import { Courses } from './components/Courses';
import Checkout from './components/Checkout';

const theme = createTheme();

export function App() {
	return (
		<>
			<ThemeProvider theme={theme}>
				<Routes>
					<Route path="/" element={<Login />} />
					<Route path="dashboard" element={<Courses />} />
					<Route path="checkout" element={<Checkout />} />
				</Routes>
			</ThemeProvider>
		</>
	)
}