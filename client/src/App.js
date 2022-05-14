import React, { Fragment } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
//components
import { useStateValue } from './StateProvider';
import NavbarMain from './pages/NavbarMain';
import Home from './pages/Home';
import Login from './pages/Login';
import EmployeeHome from './pages/EmployeeHome';
import Signup from './pages/Signup';
import SubmitProblem from './pages/SubmitProblem';
function App() {
	const [ { user }, dispatch ] = useStateValue();

	return (
		<div className="App">
			<NavbarMain />
			{!user ? (
				<Router>
					<Switch>
						<Route path="/Login">
							<Login />
						</Route>
						<Route path="/Signup">
							<Signup />
						</Route>
						<Route path="/">
							<Home />
						</Route>
					</Switch>
				</Router>
			) : (
				<Router>
					<Switch>
						<Route path="/Employee/Homepage">
							<EmployeeHome />
						</Route>
						<Route path="/Login">
							<Login />
						</Route>
						<Route path="/Signup">
							<Signup />
						</Route>
						<Route path="/SubmitProblem">
							<SubmitProblem />
						</Route>
						<Route path="/">
							<Home />
						</Route>
					</Switch>
				</Router>
			)}
		</div>
	);
}

export default App;
