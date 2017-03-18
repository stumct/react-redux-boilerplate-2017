import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Link, Switch, withRouter } from 'react-router-dom';
import Home from '../Home';
import About from '../About';
import { getHello, getCounterValue } from '../../Redux/Reducers/Test';

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
        <h2>{this.props.counter}</h2>
        <button onClick={this.props.increment}>+</button>
        <button onClick={this.props.decrement}>-</button>
        <div>
          <Switch>
            <Route path="/home" component={Home} />
            <Route path="/about" component={About} />
            <Route render={() => <h2>No matching route!</h2>} />
          </Switch>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  hello: getHello(state),
  counter: getCounterValue(state),
});

const mapDispatchToProps = dispatch => ({
  increment: () => dispatch({ type: 'INCREMENT' }),
  decrement: () => dispatch({ type: 'DECREMENT' }),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
