import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
// import Navbar from './components/Shared/Navbar';
import Home from './components/Pages/Home';
import About from './components/Pages/About';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import Alerts from './components/Shared/Alerts';

import PrivateRoute from './routing/privateRoute';

import ContactState from './context/contact/contact.state';
import AuthState from './context/auth/auth.state';
import AlertState from './context/alert/alert.state';

import setAuthToken from './utils/setAuthToken';


import { ThemeProvider } from "styled-components";

import './App.scss';

if(localStorage.token) {
	setAuthToken(localStorage.token);
}

const theme = {
	primary: '#05E0B5',
	backColor: '#ece9e6',
	darkLight: '#333333',
	dark: '#1c1c1c'
};

const App = () => {

	return(
		<AuthState>
			<ContactState>
				<AlertState>
					<Router>
						<ThemeProvider theme={theme}>
							<Fragment>
								{/* <Navbar /> */}
								<div className="container">
									<Alerts />
									<Switch>
										<PrivateRoute exact path='/' component={Home} />
										<Route exact path='/about' component={About} />
										<Route exact path='/register' component={Register} />
										<Route exact path='/login' component={Login} />
									</Switch>
								</div>
							</Fragment>
						</ThemeProvider>
					</Router>
				</AlertState>
			</ContactState>
		</AuthState>
	)
};

export default App;
