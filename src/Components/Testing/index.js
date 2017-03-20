import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getHello, getCounterValue } from '../../Redux/Reducers/Test';

class Testing extends Component {
  render() {
    return (
      <div className="abs">
        <h1>{this.props.hello}</h1>
        <h2 className="counter">{this.props.counter}</h2>
        <button onClick={this.props.increment}>+</button>
        <button onClick={this.props.decrement}>-</button>
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Testing));
