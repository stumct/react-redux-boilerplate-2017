import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Link, BrowserRouter as Router, Switch, withRouter } from 'react-router-dom';
import Home from '../Home';
import About from '../About';
import { getHello } from '../../Redux/Reducers/Test';

class App extends Component {
  render() {
    return (
      <div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/topics">Topics</Link></li>
        </ul>

        <h1>{this.props.hello}</h1>
        <Switch>
          <Route exact path="/" render={() => <Home />} />
          <Route exact path="/about" render={() => <About />} />
          <Route render={() => <h1>No matching route!</h1>} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  hello: getHello(state),
});

const mapDispatchToProps = dispatch => ({
  test: () => dispatch({ type: 'TEST' }),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
