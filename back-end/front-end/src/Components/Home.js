import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Title from './Title';
import Summary from './Summary';
import Developer from './Developer';
import Recent from './Recent';
import Facts from './Facts';

export default class Home extends Component {
  render() {
    return (
      <div className='home'>
        <Title />
        <Summary />
        <Developer />
        <Recent />
        <Facts />
      </div>
    )
  }
}
