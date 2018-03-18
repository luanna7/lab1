import React, {Component} from 'react';
import axios from 'axios';
import { Button, Input } from 'element-react';
import { connect } from 'react-redux';
import { editProfile } from '../actions';

class Profile extends Component {
  constructor(props) {
    super(props);
    const { email, name, phone, aboutMe, skills } = props;
    this.state = {
      form: {
        email,
        name,
        phone,
        aboutMe,
        skills
      }
    };
  }

  onInputChange = (key, value) => {
    this.setState({
      form: Object.assign(this.state.form, { [key]: value })
    });
  }

  render(){
    const { email, name, phone, aboutMe, skills } = this.state.form;
    const { form } = this.state;
    const { onButtonClick } = this.props;
    return (
      <div>
        <p>Welcome, {name}</p>
        <div><Input placeholder={email} prepend="Email" onChange={(e) => this.onInputChange('email', e)} value={email}/></div>
        <div><Input placeholder={phone} prepend="Phone Number" onChange={(e) => this.onInputChange('phone', e)} value={phone} /></div>
        <p>About Me</p>
        <div> <Input type="textarea" autosize={true} placeholder={aboutMe} onChange={(e) => this.onInputChange('aboutMe', e)} value={aboutMe}/></div>
        <p>My skills</p>
        <div> <Input type="textarea" autosize={true} placeholder={skills} onChange={(e) => this.onInputChange('skills', e)} value={skills}/></div>
        <Button onClick={() => onButtonClick(form)}>Update</Button>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  email: state.email,
  name: state.name,
  phone: state.phone,
  aboutMe: state.aboutMe,
  skills: state.skills
});

const mapDispatchToProps = (dispatch) => ({
  onButtonClick: (form) => dispatch(editProfile(form)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
