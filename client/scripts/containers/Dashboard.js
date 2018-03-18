import React, {Component} from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { Button, Input } from 'element-react';
import PostProject from './PostProject';
import ProjectList from './ProjectList';
import Profile from './Profile';
import MyBid from './MyBid.js';
import MyPost from './MyPost';
import { logout } from '../actions';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

const Dashboard = ({ onButtonClick }) => (
  <Router>
    <div>
      <ul>
        <li><Link to="/">Opening Projects</Link></li>
        <li><Link to="/profile">My Profile</Link></li>
        <li><Link to="/post">Post Project</Link></li>
        <li><Link to="/mypost">My Posts</Link></li>
        <li><Link to="/mybid">My Bids</Link></li>
        <li className="logout"><button className="logout-btn" onClick={() => onButtonClick()}>Logout</button></li>
      </ul>

      <Route exact path="/" component={ProjectList} />
      <Route path="/profile" component={Profile} />
      <Route path="/post" component={PostProject} />
      <Route path="/mypost" component={MyPost} />
      <Route path="/mybid" component={MyBid} />
    </div>
  </Router>
);

const mapDispatchToProps = (dispatch) => ({
  onButtonClick: () => dispatch(logout()),
})

export default connect(null, mapDispatchToProps)(Dashboard);
