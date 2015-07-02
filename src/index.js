// var React = require('react');
// var Header = require('./components/header');
// var Main = require('./components/main');
// var Footer = require('./components/footer');

require("./css/main.css"); 


// React.render(<Header />, document.getElementById('header'));
// React.render(<Main />, document.getElementById('main'));
// React.render(<Footer />, document.getElementById('footer'));
// 

var React   = require('react');
var Router  = require('react-router');
var Route   = Router.Route;
var routers = require('./routers');


var App = React.createClass({
    render: function() {
        return (
            <div>App</div>
        );
    }

});

var Hello = React.createClass({
    render: function() {
        return (
            <div>Hello</div>
        );
    }

});

var rootRoute = {
    childRoutes: [{
        path: '/'
    }]
}; 


React.render((
  <Router >
    <Route path="/" handler={App}>
      <Route path="page1" handler={Hello} />
    </Route>
  </Router>
), document.getElementById('header'));