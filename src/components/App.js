import React, { Component } from 'react';
import { connect } from 'react-redux';

import Header from './Headr';
import * as actions from '../actions';

class App extends Component {
  
  render() {
    return (
      <div>
        <Header />
        <div className="container">
       { this.props.children }
        </div>
      </div>
    );
  }
}

export default connect(null, actions)(App);