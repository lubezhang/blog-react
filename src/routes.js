import React from 'react';
import Router, { Route, Link, RouteHandler, NotFoundRoute, DefaultRoute } from 'react-router';

import App from './app';
import Main from './components/main';
import Login from './components/login';

var Home = React.createClass({
    render: function(){
        return <h2>Home</h2>;
    }
});

var NotFound = React.createClass({
    render: function(){
        return <h2>Not Found</h2>;
    }
});

/**
 * <Route name='movie' path='/movie' handler={Movie} />
 * @type {[type]}
 */
var routes = (
  <Route path='/' handler={App}>
    <NotFoundRoute handler={NotFound} />
    <DefaultRoute handler={Main} />

    <Route name='main' path='/' handler={Main} />
    <Route name='about' path='/about' handler={Login} />
    <Route name='register' path='/register' handler={Login} />
    <Route name='login' path='/login' handler={Login} />
  </Route>
);

export default routes;