import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';

function App() {
	return (
		<Routes>
			<Route path="/" element={<p>Home (landing)</p>} />

			<Route path="/new" element={<p>Create new survey</p>} />

			<Route path="/survey/:id" element={<p>take a survey</p>} />

			<Route path="/details/:id" element={<p>See results</p>} />

			<Route path="/*" element={<Navigate to="/" />} />
		</Routes>
	);
}

export default App;
