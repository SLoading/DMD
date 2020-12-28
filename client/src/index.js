import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import { createBrowserHistory } from 'history';
import allReducers from './reducer/index';
import { createStore } from 'redux';

const history = createBrowserHistory();
const store = createStore(allReducers);

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <Route exact path="/" component={App}/>
        </Router>
    </Provider>,
  document.getElementById('root')
);

