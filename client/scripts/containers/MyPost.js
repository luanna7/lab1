import React, {Component} from 'react';
import axios from 'axios';
import { Button, Input } from 'element-react';
import { connect } from 'react-redux';
import ProjectItem from './ProjectItem';
import { getMyPosts } from '../actions';

class ProjectList extends Component {
  componentDidMount() {
    const { dispatch, name } = this.props;
    dispatch(getMyPosts(name));
  }

  render(){
    const { myPosts } = this.props;
    return (
      <div>
      {
        myPosts.length ?
        <div>
          <h2>My Posts</h2>
          {
            myPosts.map((project, key) =>
              <div key={key} className='project-item'>
                <p>Title: {project.title}</p>
                <p>Employer: {project.employer}</p>
                <p>Desciption: {project.description}</p>
                <p>Skills Required: {project.skillsRequired}</p>
                <p>Budget Range: {project.budgetRange}</p>
              </div>
            )
          }
        </div>
        : <div>loading</div>
      }
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  myPosts: state.myPosts,
  name: state.name
});

const mapDispatchToProps = (dispatch) => ({
  dispatch,
});

export default connect(mapStateToProps, mapDispatchToProps)(ProjectList);
