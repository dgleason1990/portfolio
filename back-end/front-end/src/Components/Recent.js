import React, { Component } from 'react';
import Projects from './Projects'

export default class Recent extends Component {
  render() {
    return (
        <div id='recentWork' data-aos='fade-zoom-in' data-aos-duration='1000'>
            <h1> My Recent Work </h1>
            <Projects />
        </div>
    )
  }
}
