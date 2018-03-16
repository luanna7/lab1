

import React, {Component} from 'react';
import axios from 'axios';

export default class App extends Component {
  handleInput() {
    console.log(true);
  }

  handleSubmit() {
    axios.post('http://localhost:3000/users/signup', {
      firstName: 'Fred',
      lastName: 'Flintstone'
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }
  render () {
    return (
      <div>
        <button onClick={this.handleSubmit} />
      </div>
    );
  }
}
