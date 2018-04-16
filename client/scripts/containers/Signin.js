import React, {Component} from 'react';
import axios from 'axios';
import { Button, Input } from 'element-react';
import { connect } from 'react-redux';
import { signin } from '../actions';

class Signin extends Component {
  constructor(props) {
    super();
    this.state = {
      form: {
        password: '',
        email: ''
      }
    }
    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange = (key, value) => {
    this.setState({
      form: Object.assign(this.state.form, { [key]: value })
    });
  }

  render(){
    const { onButtonClick } = this.props;
    const { email, password } = this.state.form;
    const form = this.state.form;
    return (
      <div>
        <Input placeholder="email" prepend="email" type="email" onChange={(e) => this.onInputChange('email', e)} value={email}></Input>
        <Input placeholder="password" prepend="password" type="password" onChange={(e) => this.onInputChange('password', e)} value={password}></Input>
        <Button onClick={() => onButtonClick(form)}>Sign in</Button>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  dispatch,
  onButtonClick: (form) => dispatch(signin(form))
});

export default connect(null, mapDispatchToProps)(Signin);
