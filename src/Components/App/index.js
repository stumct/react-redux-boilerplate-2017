import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import Routes from '../../Routes';
import RouteWithSubRoutes from '../../Routes/RouteWithSubRoutes';

class App extends Component {
  render() {
    return (
      <div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/topics">Topics</Link></li>
        </ul>

        <hr />
        <h1>{this.props.hello}</h1>
        {Routes.map((route, i) => <RouteWithSubRoutes key={i} {...route} />)}
      </div>
    );
  }
}

export default App;
