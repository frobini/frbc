import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import ApplicationsPage from './components/application/ApplicationsPage';
import ManageApplicationPage from './components/application/ManageApplicationPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage}/>
    <Route path="about" component={AboutPage}/>
    <Route path="applications" component={ApplicationsPage}/>
    <Route path="application" component={ManageApplicationPage}/>
    <Route path="application/:id" component={ManageApplicationPage}/>
  </Route>
);
