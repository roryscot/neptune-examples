import React, { Component } from 'react';

class ClassComponent extends Component {
    static propTypes = {
    }
  
    // lifecycle methods


    // custom methods 


    render() {
      let {PrivateRoute} = this;
      let content = 'test'
      return (
          <div>
            { content }
          </div>
      );
    }
  }
  
  const mapStateToProps = state => {
    return {

    };
  };
  
  const mapDispatchToProps = dispatch => {
    return {
      
    };
  };
  
  let ClassComponent = connect(mapStateToProps, mapDispatchToProps)(ClassComponent);