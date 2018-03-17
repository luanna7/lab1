import React, {Component} from 'react';
import axios from 'axios';
import { Button, Input } from 'element-react';
import { connect } from 'react-redux';
import Signup from './containers/Signup';

class App extends Component {
  render () {
    return <Signup />
  }
}
export default App;
