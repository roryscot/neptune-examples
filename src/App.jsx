import React, { Component } from 'react';
import PropTypes from 'prop-types'

import styled from 'styled-components';

// import logo from './logo.svg';
// import './App.css';

// import './styles/index.css';
// import './styles/css/theme1.css';

import bgImage from './assets/images/intelligentDesignBackground.jpg'

// Create a Title component that'll render an <h1> tag with some styles
const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

// Create a Wrapper component that'll render a <section> tag with some styles
const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;


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

          <Wrapper>
    <Title>
      Hello World!
    </Title>
  </Wrapper>
          
        </div>
      </div>
    );
  }
}

export default App;
