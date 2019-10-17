import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { Header } from './common';
import { Home } from './Home';
import { SignIn } from './SignIn';
import { SignUp } from './SignUp';

const App = () => (
    <Router>
        <Header />

        <Route path="/" exact component={Home} />
        <Route path="/signin" exact component={SignIn} />
        <Route path="/signup" exact component={SignUp} />        
    </Router>
);

export default App;