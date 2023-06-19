import { BrowserRouter } from 'react-router-dom';
import Menu from './components/menu/Menu';
import Planets from './components/planets/Planets';
import { GlobalStyles } from './styles/globalStyles';
import Router from './router/Router';

const App = () => {
	return (
		<>
			<BrowserRouter>
				<GlobalStyles />
				<Menu />
				<Router />
				<Planets />
			</BrowserRouter>
		</>
	);
};

export default App;
