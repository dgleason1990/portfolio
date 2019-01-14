import React, { Component } from 'react';
import { withRouter } from 'react-router';

class Nav extends Component {
state={
  classNameHome:'onHome',
  classNameContact:'notOnContact',
  classNameNavbar: 'navbar'
}

onHomeChange=()=>{
    this.setState({
      classNameHome: 'onHome',
      classNameContact: 'notOnContact'
    })
  this.props.history.push('/home')
}

onContactChange=()=>{
    this.setState({
      classNameContact: 'onContact',
      classNameHome: 'notOnHome'
    })
  this.props.history.push('/contact')
}

componentDidMount(){
  let newPos = []; 
  window.addEventListener('scroll', () => {
    console.log(newPos[newPos.length-1] < window.scrollY)
    // console.log(newPos)
    // console.log(window.scrollY)
    console.log(window.scrollY < 80)
    newPos.push(window.scrollY);
    if( window.scrollY < 80 ){ 
      this.setState({
        classNameNavbar: 'navbar'
      })
    } else {
      this.setState({
        classNameNavbar: 'navbarChanged'
    })}
    // else if (newPos[newPos.length-1] < window.scrollY){
    //   newPos = [];
    //   this.setState({
    //     classNameNavbar: 'navbarChanged'
    //   })
    // }
    // else if ((newPos[0] - window.scrollY)  === 10 ){
    //   this.setState({
    //     classNameNavbar: 'navbar'
    //     })}
      })
  }

    // {
    //   if (newPos[newPos.length-1] < window.scrollY){
    //     newPos = [];
    //     console.log('hey hey')
    //     this.setState({
    //       classNameNavbar: 'navbarChanged'
    //     })
    //   } 
      // else if ((newPos[0] - window.scrollY)  === 10 ){
      //   this.setState({
      //     classNameNavbar: 'navbar'
      //   })
      // }

  render() {
    return (
      <div className={this.state.classNameNavbar}>
        <div className={this.state.classNameHome} to='/home' onClick={this.onHomeChange}> David Gleason's Page </div>
        <div className={this.state.classNameContact} to='/contact' onClick={this.onContactChange}> Want to Talk </div>
      </div>
    )
  }
}

export default withRouter(Nav);