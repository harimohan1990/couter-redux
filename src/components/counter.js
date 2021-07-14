import React, { Component } from 'react';
import { connect } from 'react-redux';

import '../components/Counter.css'

class Counter extends Component {

  addOne = () => {
    this.props.dispatch({ type: 'ADD_ONE' });
  }

  minusOne = () => {
    this.props.dispatch({ type: 'MINUS_ONE' });
  }

  render() {
    return (
      <div className="App" >
        <header className="App-header">
          <h1>{this.props.number}</h1>
          <div className="container">
          <button onClick={this.addOne} type="button" className="button">+</button>
            <button onClick={this.minusOne} type="button" className="button">-</button>
          
          </div>
        </header>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    number: state.number
  };
}

export default connect(mapStateToProps)(Counter);