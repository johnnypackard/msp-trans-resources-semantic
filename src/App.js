import React from 'react';
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';
import './styles/App.css';

import LoginPage from './components/LoginPage/LoginPage';
import RegisterPage from './components/RegisterPage/RegisterPage';
import UserPage from './components/UserPage/UserPage';
import InfoPage from './components/InfoPage/InfoPage';
import HomepageHeading from './components/Homepage/Homepage';

const App = () => (
    <div>
      <Router>
        <Switch>
          <Redirect exact from="/" to="/homepage" />
          <Route
            path="/login"
            component={LoginPage}
          />
          <Route
            path="/register"
            component={RegisterPage}
          />
          <Route
            path="/user"
            component={UserPage}
          />
          <Route
            path="/info"
            component={InfoPage}
          />
          <Route
            path="/homepage"
            component={HomepageHeading}
          />
          {/* OTHERWISE (no path!) */}
          <Route render={() => <h1>404</h1>} />

        </Switch>
      </Router>
    </div>

);

export default App;