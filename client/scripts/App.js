import React, {Component} from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { Button, Input } from 'element-react';
import Signup from './containers/Signup';
import Signin from './containers/Signin';

class App extends Component {
  render () {
    const { email } = this.props;
    return (
      <div>
        <h2>Freelancers Application</h2>
        <h3>Sign up</h3>
        <Signup />
        <div style={{borderBottom: '1px solid black', margin: '30px 0'}}/>
        <h3>Sign in</h3>
        <Signin />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  email: state.email
});

export default connect(mapStateToProps)(App);
