import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import configureStore from './store/configureStore';
import {Provider} from 'react-redux';
import {Router, hashHistory} from 'react-router';
import routes from './routes';
import {loadApplications} from "./actions/applicationActions";
import './styles/styles.css'; //Webpack can import CSS files too!
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const store = configureStore();
store.dispatch(loadApplications());

render(
  <Provider store={store}>
    <Router history={hashHistory} routes={routes}/>
  </Provider>,
    document.getElementById('app')
);
