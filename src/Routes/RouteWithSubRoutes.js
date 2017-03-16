import React from 'react';
import { Route } from 'react-router-dom';

const RouteWithSubRoutes = route => (
  <Route
    path={route.path}
    render={props => (
      <route.component
        {...props}
        routes={
          route.routes
          // pass the sub-routes down to keep nesting
        }
      />
    )}
  />
);

export default RouteWithSubRoutes;
