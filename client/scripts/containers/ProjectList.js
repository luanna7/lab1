import React, {Component} from 'react';
import axios from 'axios';
import { Button, Input } from 'element-react';
import { connect } from 'react-redux';
import { getOpenProjects, createBid } from '../actions';

class ProjectList extends Component {
  ComponentDidMount() {
    this.props.dispatch(getOpenProjects);
  }

  render(){
    const { projects, onButtonClick, name } = this.props;
    return (
      projects.length ?
      {projects.map((project) => (
        <div>
          <p>{project.title}</p>
          <p>{project.employer}</p>
          <button onClick={onButtonClick(name)}>Bid</button>
        </div>
      ))} : <div>No Projects Available</div>
    );
  }
}

const mapStateToProps = (state) => ({
  projects: state.openProjects,
  customer: state.name,
});

const mapDispatchToProps = (dispatch) => ({
  dispatch,
  customer:
  onButtonClick: (freelancer) => dispatch(createBid(freelancer)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
