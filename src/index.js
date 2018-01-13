import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reducers from './reducers/index';

import './scss/style.scss';
import Main from './components/Main/Main';

const store = createStore(reducers, applyMiddleware(thunk));
export default store;

const root = document.getElementById('root');
ReactDOM.render(
    <Provider store={store}>
        <Main />
    </Provider>,
    root,
);
