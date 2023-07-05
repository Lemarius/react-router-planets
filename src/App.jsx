import { BrowserRouter } from 'react-router-dom';
import Menu from './components/menu/Menu';
import { GlobalStyles } from './styles/globalStyles';
import Router from './router/Router';

const App = () => {
	return (
		<>
			<BrowserRouter>
				<GlobalStyles />
				<Menu />
				<Router />
			</BrowserRouter>
		</>
	);
};

export default App;
