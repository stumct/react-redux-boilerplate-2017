import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Link, Switch, withRouter } from 'react-router-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Home from '../Home';
import About from '../About';
import Testing from '../Testing';

class App extends Component {
  render() {
    console.log(this.props.location, this.props.match);
    return (
      <div>
        <div className="nav">
          <div className="brand">ReactRedux</div>
          <ul className="nav-left">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/testing">Testing</Link></li>
            <li><Link to="/topics">Topics</Link></li>
          </ul>
          <ul className="nav-right">
            <li><Link to="/login">Login</Link></li>
          </ul>
        </div>
        <div className="container">
          <ReactCSSTransitionGroup transitionName="fade" transitionEnterTimeout={250} transitionLeaveTimeout={250}>
            <Switch location={this.props.location} key={this.props.location.key}>
              <Route exact path="/" children={({ match }) => match ? <Home match={match} /> : null} />
              <Route
                path="/about"
                children={({ match, location }) => match ? <About location={this.props.location} key={this.props.location.key} match={match} /> : null}
              />
              <Route path="/testing" children={({ match }) => match ? <Testing match={match} /> : null} />
              <Route children={({ match }) => match ? <div className="abs"><h2>No matching route!</h2></div> : null} />
            </Switch>
          </ReactCSSTransitionGroup>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
