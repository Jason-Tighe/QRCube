import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import routes from './routes';
const AppRouter = () => {
	return (
		<Router>
			<Switch>
				{routes.map(({ Component, key, path }) => (
					<Route
						key={key}
						path={path}
						component={() => <Component page={key} />}
					></Route>
				))}
			</Switch>
		</Router>
	);
};

export default AppRouter;
