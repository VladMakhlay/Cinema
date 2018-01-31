import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reducers from './scripts/reducers/index';

import Main from './scripts/components/Main/index';
import './styles/style.scss';

const store = createStore(reducers, applyMiddleware(thunk));
export default store;

const root = document.getElementById('root');
ReactDOM.render(
    <Provider store={store}>
        <Main />
    </Provider>,
    root,
);
