import React, { Component } from 'react';

import PrivateRoute from './PrivateRoute';

class RootContainerComponent extends Component {
    static propTypes = {
      auth: PropTypes.shape({
        isLoading: PropTypes.bool,
        isAuthenticated: PropTypes.bool,
      }),
      loadUser: PropTypes.func.isRequired
    }
  
    componentDidMount() {
      this.props.loadUser();
    }
  
    render() {
      return (
        <BrowserRouter basename={getBasename()}>
          <GAListener>
            <Switch>
              <Redirect to="/" />
            </Switch>
          </GAListener>
        </BrowserRouter>
      );
    }
  }
  
  const mapStateToProps = state => {
    return {
      auth: state.auth,
      loading: state.ajaxCallsInProgress > 0
    };
  };
  
  const mapDispatchToProps = dispatch => {
    return {
      loadUser: () => {
        return dispatch(auth.loadUser());
      }
    };
  };
  
  let RootContainer = connect(mapStateToProps, mapDispatchToProps)(RootContainerComponent);