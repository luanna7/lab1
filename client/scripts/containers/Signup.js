import React, {Component} from 'react';
import axios from 'axios';
import { Button, Input } from 'element-react';
import { connect } from 'react-redux';
import { signup } from '../actions';

class Signup extends Component {
  render(){
    const { onButtonClick } = this.props;
    return (
      <div>
        <Input />
        <Input />
        <Button onClick={onButtonClick}>Sign up</Button>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  dispatch,
  onButtonClick: () => dispatch(signup({ body: 'test' })),
});

export default connect(null, mapDispatchToProps)(Signup);
