import { Routes, Route } from 'react-router-dom';

import { Home } from '../pages/home';
import { Clothes } from '../pages/clothes';
import { Sneakers } from '../pages/sneakers';
import { Bags } from '../pages/bags';
import { Accessorize } from '../pages/accessorize';
import { NotFound } from '../pages/notFound';

const Routers = () => {
	return (
		<Routes>
			<Route
				path='/'
				element={<Home />}
			/>
			<Route
				path='Clothes'
				element={<Clothes />}
			/>
			<Route
				path='Sneakers'
				element={<Sneakers />}
			/>
			<Route
				path='Bags '
				element={<Bags />}
			/>
			<Route
				path='Accessorize'
				element={<Accessorize />}
			/>
			<Route
				path='*'
				element={<NotFound />}
			/>
		</Routes>
	);
};

export default Routers;
