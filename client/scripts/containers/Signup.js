import React, {Component} from 'react';
import axios from 'axios';
import { Button, Input } from 'element-react';
import { connect } from 'react-redux';
import { signup } from '../actions';

class Signup extends Component {
  constructor(props) {
    super();
    this.state = {
      form: {
        name: '',
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
    const { name, email, password } = this.state.form;
    const form = this.state.form;
    return (
      <div>
        <Input placeholder="name" prepend="name" onChange={(e) => this.onInputChange('name', e)} value={name}></Input>
        <Input placeholder="password" prepend="password" onChange={(e) => this.onInputChange('password', e)} value={password}></Input>
        <Input placeholder="email" prepend="email" onChange={(e) => this.onInputChange('email', e)} value={email}></Input>
        <Button onClick={() => onButtonClick(form)}>Sign up</Button>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  onButtonClick: (form) => dispatch(signup(form))
});

export default connect(null, mapDispatchToProps)(Signup);
