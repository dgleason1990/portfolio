import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class Nav extends Component {
    onClick=()=>{
        this.props.history.push('/contact')
    }
  render() {
    return (
      <div className="navbar">
        <Link to='/home'> David Gleason's Page </Link>
        <Link to='/contact'> Want to Talk </Link>
      </div>
    )
  }
}
