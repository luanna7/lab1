import React, {Component} from 'react';
import { Button, Input } from 'element-react';
import { connect } from 'react-redux';
import { createBid } from '../actions';

class ProjectItem extends Component {
  constructor() {
    super();
    this.state = {
      bidPrice: '',
    }
  };

  onInputChange = (value) => {
    this.setState({
      bidPrice: value,
    });
  }

  render () {
    const { bidPrice } = this.state;
    const { onButtonClick, email, project } = this.props;
    return (
      <div className='project-item'>
        <p>Title: {project.title}</p>
        <p>Employer: {project.employer}</p>
        <p>Desciption: {project.description}</p>
        <p>Skills Required: {project.skillsRequired}</p>
        <p>Budget Range: {project.budgetRange}</p>
        <h4>Bid on this project?</h4>
        <Input placeholder="your bid price" prepend="bid price" onChange={(e) => this.onInputChange(e)} value={bidPrice}></Input>
        <Button onClick={() => onButtonClick(email, bidPrice, project.Id)}>Bid</Button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.email,
});

const mapDispatchToProps = (dispatch) => ({
  onButtonClick: (email, bidPrice, id) => {
    const requestBody = {
      freelancer: email,
      price: bidPrice,
      project: id,
      created: new Date()
    };
    dispatch(createBid(requestBody));
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(ProjectItem);
