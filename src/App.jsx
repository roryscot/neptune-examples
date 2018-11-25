import React, { Component } from 'react';
import PropTypes from 'prop-types'


// import logo from './logo.svg';
// import './App.css';

import './styling/index.css';

import bgImage from './assets/intelligentDesignBackground.jpg'

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
      <body className="demo-main" data-image="mainBgImage">
        <div id="wrapper">
          
        </div>
      </body>
    );
  }
}

export default App;
