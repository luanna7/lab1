import React, {Component} from 'react';
import axios from 'axios';
import { Button, Input } from 'element-react';
import { connect } from 'react-redux';
import ProjectItem from './ProjectItem';
import { getMyBids } from '../actions';

class ProjectList extends Component {
  componentDidMount() {
    const { dispatch, name } = this.props;
    dispatch(getMyBids(name));
  }

  render(){
    const { myBids } = this.props;
    return (
      <div>
      {
        myBids.length ?
        <div>
          <h2>My Posts</h2>
          {
            myBids.map((project, key) =>
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
  myBids: state.myBids,
  name: state.name
});

const mapDispatchToProps = (dispatch) => ({
  dispatch,
});

export default connect(mapStateToProps, mapDispatchToProps)(ProjectList);
