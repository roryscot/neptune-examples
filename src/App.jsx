import React, { Component } from 'react';
import PropTypes from 'prop-types'


import logo from './logo.svg';
import './App.css';

class App extends Component {
  static proptypes = {
    test: PropTypes.string
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Neptune Software
          </p>
        </header>
      </div>
    );
  }
}

export default App;
