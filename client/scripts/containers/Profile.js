import React, {Component} from 'react';
import axios from 'axios';
import { Button, Input } from 'element-react';
import { connect } from 'react-redux';
import { editProfile } from '../actions';

class Profile extends Component {
  constructor(props) {
    super();
    const { updateProfile, email, name, phone, aboutMe, skills } = this.props;
    this.state = {
      form: {
        email,
        name,
        phone,
        aboutMe,
        skills
      }
    }
  }

  onInputChange => (key, value) {
    this.setState({
      form: Object.assign(this.state.form, { [key]: value })
    });
  }

  render(){
    const { updateProfile, email, name, phone, aboutMe, skills } = this.state.form;
    return (
      <div>
        <p>Welcome, {name}</p>
        <p><Input placeholder={email} prepend="Email" onChange={this.onInputChange('email')} value={email}/></p>
        <p><Input placeholder={phone} prepend="Phone Number" onChange={this.onInputChange('phone')} value={phone} /></p>
        <p>About Me</p>
        <p> <Input type="textarea" autosize={true} placeholder={aboutMe} onChange={this.onInputChange('aboutMe')} value={aboutMe}/></p>
        <p>My skills</p>
        <p> <Input type="textarea" autosize={true} placeholder={skills} onChange={this.onInputChange('skills')} value={skills}/></p>
        <Button updateProfile={this.props.onButtonClick}>Update</Button>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  email: state.email,
  name: state.name,
  phone: state.phone,
  aboutMe: state.aboutMe,
  skils: state.skills
});

const mapDispatchToProps = (dispatch) => ({
  dispatch,
  onButtonClick: (form) => dispatch(editProfile(form)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
