import React, {Component} from 'react';
import axios from 'axios';
import { Button, Input } from 'element-react';
import { connect } from 'react-redux';
import { getMyBids } from '../actions';

class MyBids extends Component {
  componentDidMount() {
    const { dispatch, email } = this.props;
    dispatch(getMyBids(email));
  }

  render(){
    const { myBids } = this.props;
    return (
      <div>
      {
        myBids.length ?
        <div>
          <h2>My Bids</h2>
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
        : <div>No Bids Available</div>
      }
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  myBids: state.myBids,
  email: state.email
});

const mapDispatchToProps = (dispatch) => ({
  dispatch,
});

export default connect(mapStateToProps, mapDispatchToProps)(MyBids);
