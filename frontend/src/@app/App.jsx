import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { Header, PrivateRoute, AuthRoute } from './common';
import { Home } from './Home';
import { SignIn } from './SignIn';
import { SignUp } from './SignUp';
import { Protected } from './Protected';

const App = () => (
    <Router>
        <Header />

        <Route path="/" exact component={Home} />
        <AuthRoute path="/signin" component={SignIn} />
        <AuthRoute path="/signup" component={SignUp} />
        <PrivateRoute path="/protected" component={Protected} />
    </Router>
);

export default App;