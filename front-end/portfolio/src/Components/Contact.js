import React, { Component } from 'react';
import Particle from './Particle';
// import Particles from "react-particles-js";

export default class Contact extends Component {
  render() {
    return (
      <div className='contact' data-aos='flip-left' data-aos-duration='1000'>
        <Particle />
        <div className='submission'>
            <p>Thanks for taking the time to visit my site and reach out to me! What can I do for you?</p>
              <form>
                <div>
                  <div>
                    Name: <input/>
                  </div>
                  <div>
                    Email: <input type='email'/>
                  </div>
                </div>
                  Message: <input className='message'/>
                <button> Submit </button>
              </form>
          </div>
      </div>
    )
  }
}
