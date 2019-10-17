import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import store from './redux';
import App from './@app/App';


render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

store.dispatch({ type: 'just_to_see_the_store' });