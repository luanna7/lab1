import React, {Component} from 'react';
import axios from 'axios';
import { Button, Input } from 'element-react';
import { connect } from 'react-redux';
import { postProject } from '../actions';

class PostProject extends Component {
  constructor(props) {
    super();
    const { updateProfile, email, name, phone, aboutMe, skills } = this.props;
    this.state = {
      form: {
        title,
        description,
        skills,
        budgetRange
      }
    }
  }

  onInputChange => (key, value) {
    this.setState({
      form: Object.assign(this.state.form, { [key]: value })
    });
  }

  render(){
    const { title, description, skills, budgetRange } = this.state.form;
    return (
      <div>
        <h3>Post a Project</h3>
        <p><Input placeholder="title" prepend="Title" onChange={this.onInputChange('title')} value={title}/></p>
        <p>Description</p>
        <p> <Input type="textarea" autosize={true} placeholder={description} onChange={this.onInputChange('description')} value={title}/></p>
        <p>skills</p>
        <p> <Input type="textarea" autosize={true} placeholder={skills} onChange={this.onInputChange('skills')} value={skills}/></p>
        <p><Input placeholder="budgetRange" prepend="budgetRange" onChange={this.onInputChange('budgetRange')} value={budgetRange}/></p>
        <Button updateProfile={this.props.onButtonClick(this.state.form)}>Post Poject</Button>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  dispatch,
  onButtonClick: (form) => dispatch(postProject(form)),
});

export default connect(null, mapDispatchToProps)(Signin);
