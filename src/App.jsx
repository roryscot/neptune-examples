import React, { Component } from 'react';
import PropTypes from 'prop-types'

// import styled from 'styled-components';

// import logo from './logo.svg';
// import './App.css';

import './index.css';
// import './styles/css/theme1.css';

// import { AddTodo, VisibleTodoList } from './components/lib/todos'
// import Footer from './components/lib/layout/footer/Footer';

// import './assets/fontawesome-free-5.5.0-web/css/all.min.css'


import AnimatedTransitions from './components/AnimatedTransitions'


class App extends Component {
  static proptypes = {
    test: PropTypes.string  
  }

  render() {
    return (
      <div className="application-container">

        <AnimatedTransitions />
        
      </div>
    );
  }
}

export default App;
