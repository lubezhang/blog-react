import React from 'react';
import Router, { Route} from 'react-router';
import routes from './routes'

Router.run(routes, (Root, state) =>
  React.render(<Root />, document.body)
);