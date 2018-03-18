import React, {Component} from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { Button, Input } from 'element-react';
import Signup from './containers/Signup';
import Signin from './containers/Signin';
import Dashboard from './containers/Dashboard';

class App extends Component {
  render () {
    const { email } = this.props;
    return (
      <Dashboard />
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.email
});

export default connect(mapStateToProps)(App);
