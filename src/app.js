import React from 'react';
import Router, { RouteHandler } from 'react-router';
import Header from './components/header';

let App = React.createClass({
    render: function() {
        return (
            <div>
                <div id="header">
                    <Header />
                </div>
                <div id="main" className="container">
                    <RouteHandler />
                </div>
            </div>
        );
    }

});

export default  App;