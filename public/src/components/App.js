import React, {Component} from 'react';
import { Button } from 'element-react';
import axios from 'axios';
import { Input } from 'element-react';

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
          <Input onChange={this.handleInput} placeholder="first name" />
          <Input onChange={this.handleInput} placeholder="last name" />
          <Button onClick={this.handleSubmit}>Submit</Button>
        </div>
      )
    }
}
