import React from 'react';
import axios from 'axios';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import store from './redux';
import App from './@app/App';

const token = store.getState().auth.token;
const bearer = token ? `Bearer ${token}` : '';
axios.defaults.baseURL = 'http://localhost:3004/';
axios.defaults.headers.common['Authorization'] = bearer;

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

store.dispatch({ type: 'just_to_see_the_store' });