import React, {Component} from 'react';
import axios from 'axios';
import { Button, Input } from 'element-react';
import { connect } from 'react-redux';
import ProjectItem from './ProjectItem';
import { getOpenProjects, createBid } from '../actions';

class ProjectList extends Component {
  componentDidMount() {
    this.props.dispatch(getOpenProjects());
  }

  render(){
    const { projects } = this.props;
    return (
      <div>
      {
        projects.length ?
        <div>
          <h2>Opening Projects</h2>
          {
            projects.map((project, key) => <ProjectItem project={project} key={key} />)
          }
        </div>
        : <div>No Projects available</div>
      }
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  projects: state.openProjects,
});

export default connect(mapStateToProps)(ProjectList);
