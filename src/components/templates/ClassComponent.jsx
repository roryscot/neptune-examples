import React, { Component } from 'react';

class ClassComponent extends Component {
    static propTypes = {
    }
  
    // lifecycle methods


    // custom methods 


    render() {
      let {PrivateRoute} = this;
      return (
          <div>

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