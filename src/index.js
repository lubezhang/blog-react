var React = require('react');
var Header = require('./components/header');
var Main = require('./components/main');
var Footer = require('./components/footer');


React.render(<Header />, document.getElementById('header'));
React.render(<Main />, document.getElementById('main'));
React.render(<Footer />, document.getElementById('footer'));