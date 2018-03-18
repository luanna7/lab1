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
      <div>Project List</div>
    );
  }
}

const mapStateToProps = (state) => ({
  projects: state.openProjects,
  customer: state.name,
});

const mapDispatchToProps = (dispatch) => ({
  dispatch,
  onButtonClick: (freelancer) => dispatch(createBid(freelancer)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProjectList);
