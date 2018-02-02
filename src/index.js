import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { Provider } from 'react-redux';

import store from './store/store';
import App from './components/App'
import HomePage from './components/HomePage';
import './index.css';


ReactDOM.render(
  <Provider store={ store }>
    <Router history={hashHistory}>
      <Route path="/app" component={App}/>
      <Route path="/*" component ={HomePage}/>
    </Router>
  </Provider>,
  document.getElementById('root')
);
