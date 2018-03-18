import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { Button, Input } from 'element-react';
import PostProject from './PostProject';
import ProjectList from './ProjectList';
import Profile from './Profile';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

const Dashboard = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/">Opening Projects</Link></li>
        <li><Link to="/profile">My Profile</Link></li>
        <li><Link to="/post">Post Project</Link></li>
      </ul>
      <Route exact path="/" component={ProjectList} />
      <Route path="/profile" component={Profile}/>
      <Route path="/post" component={PostProject}/>
    </div>
  </Router>
)

export default Dashboard;
