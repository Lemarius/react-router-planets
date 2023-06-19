import { Route, Routes } from 'react-router-dom';
import Planets from '../components/planets/Planets';

const Router = () => {
	return (
		<Routes>
			<Route path='/' element={<Planets planetName={'mercury'} />} />
			<Route path='/venus' element={<Planets planetName={'venus'} />} />
			<Route path='/earth' element={<Planets planetName={'earth'} />} />
			<Route path='/mars' element={<Planets planetName={'mars'} />} />
			<Route path='/jupiter' element={<Planets planetName={'jupiter'} />} />
			<Route path='/saturn' element={<Planets planetName={'saturn'} />} />
			<Route path='/uranus' element={<Planets planetName={'uranus'} />} />
			<Route path='/neptune' element={<Planets planetName={'neptune'} />} />
		</Routes>
	);
};

export default Router;
