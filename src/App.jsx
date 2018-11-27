import React, { Component } from 'react';
import PropTypes from 'prop-types'

// import styled from 'styled-components';

// import logo from './logo.svg';
// import './App.css';

// import './styles/index.css';
// import './styles/css/theme1.css';

import { AddTodo, VisibleTodoList } from './components/lib/todos'
import Footer from './components/lib/layout/footer/Footer';


class App extends Component {
  static proptypes = {
    test: PropTypes.string  
  }

  render() {
    return (
      <div className="application-container">
        <div>
        
        <AddTodo />
        <VisibleTodoList />
        <Footer />
        </div>
      </div>
    );
  }
}

export default App;
