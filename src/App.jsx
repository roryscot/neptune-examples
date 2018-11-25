import React, { Component } from 'react';
import PropTypes from 'prop-types'


// import logo from './logo.svg';
// import './App.css';

import './styles/index.css';

import bgImage from './assets/images/intelligentDesignBackground.jpg'

class App extends Component {
  static proptypes = {
    test: PropTypes.string
  }

  static mainBgImage = {
    backgroundImage: `url("${bgImage}")`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  };

  render() {
    return (
      <div className="demo-main">
        <div id="wrapper">
          
        </div>
      </div>
    );
  }
}

export default App;
