import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

class About extends Component {
  render() {
    return (
      <div className="abs">
        <Link to={`${this.props.match.path}/test`}>Test</Link>
        <div>About</div>
        {this.props.match.isExact ? null : <Route path="/about/test" render={() => <h2>Test</h2>} />}
      </div>
    );
  }
}

export default About;
