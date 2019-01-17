import React, { Component } from 'react';
import Particle from './Particle';

export default class Contact extends Component {
  state={
    name:'',
    email:'',
    message:''
  }

  handleName = (e) => {
    this.setState({
      name: e.target.value
    })
  }

  handleEmail = (e)=>{
    this.setState({
      email: e.target.value
    })
  }

  handleMessage = (e)=>{
    this.setState({
      message: e.target.value
    })
  }

  handleSubmission= (e)=>{
    e.preventDefault();
    console.log(this.state)
    let init = {
      method: 'POST',
      body: JSON.stringify(this.state),
      headers: {"content-type": "application/json"}
    }
    fetch('http://localhost:8080/contact', init)
    .then(res=>console.log(res))
    .catch(err=> console.log(err))
  }
  render() {
    return (
      <div className='contact' data-aos='flip-left' data-aos-duration='1000'>
        <Particle />
        <div className='submission'>
            <p>Thanks for taking the time to visit my site and reach out to me! What can I do for you?</p>
              <form>
                <div>
                  <div>
                    Name: <input onChange={this.handleName} />
                  </div>
                  <div>
                    Email: <input type='email' onChange={this.handleEmail} />
                  </div>
                </div>
                  Message: <textarea className='message' onChange={this.handleMessage} />
                <button onClick={this.handleSubmission}> Submit </button>
              </form>
          </div>
      </div>
    )
  }
}
