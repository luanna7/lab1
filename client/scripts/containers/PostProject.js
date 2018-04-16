import React, {Component} from 'react';
import axios from 'axios';
import { Button, Input } from 'element-react';
import { connect } from 'react-redux';
import { postProject } from '../actions';

class PostProject extends Component {
  constructor(props) {
    super();
    this.state = {
      form: {
        title: '',
        description: '',
        skills: '',
        budgetRange: ''
      }
    };
    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange = (key, value) => {
    this.setState({
      form: Object.assign(this.state.form, { [key]: value })
    });
  }

  render(){
    const { title, description, skills, budgetRange } = this.state.form;
    const { form } = this.state;
    const { onButtonClick, name } = this.props;
    return (
      <div>
        <h3>Post a Project</h3>
        <div><Input placeholder="title" prepend="Title" onChange={(e) => this.onInputChange('title', e)} value={title}/></div>
        <p>Description</p>
        <div> <Input type="textarea" autosize={true} placeholder={description} onChange={(e) => this.onInputChange('description', e)} value={description}/></div>
        <p>skills required</p>
        <div> <Input type="textarea" autosize={true} placeholder={skills} onChange={(e) => this.onInputChange('skills', e)} value={skills}/></div>
        <div><Input placeholder="budgetRange" prepend="budgetRange" onChange={(e) => this.onInputChange('budgetRange', e)} value={budgetRange}/></div>
        <Button onClick={() => onButtonClick(form, name)}>Post Poject</Button>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  name: state.name
})

const mapDispatchToProps = (dispatch) => ({
  onButtonClick: (form, name) => {
    const requestBody = {
      ...form,
      employer: name
    };
    dispatch(postProject(requestBody));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(PostProject);
