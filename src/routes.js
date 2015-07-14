import React from 'react';
import Router, { Route, Link, RouteHandler, NotFoundRoute, DefaultRoute } from 'react-router';

import App from './app';
import { Main, Login, Register } from './components';

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
    <Route name='register' path='/register' handler={Register} />
    <Route name='login' path='/login' handler={Login} />
  </Route>
);

export default routes;