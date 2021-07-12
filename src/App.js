import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';

import store from './store';
import Count from './components/Count';

function App() {
	return (
		<Provider store={store}>
			<div className='App'>
				<h2>Hello</h2>
				<Count></Count>
			</div>
		</Provider>
	);
}

export default App;
