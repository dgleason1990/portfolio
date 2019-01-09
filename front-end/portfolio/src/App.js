import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Switch, Redirect, Route } from 'react-router-dom';
import Nav from './Components/Nav';
import Home from './Components/Home';
import './App.css';
import Contact from './Components/Contact';
import AOS from 'aos';
import '../node_modules/aos/dist/aos.css'

class App extends Component {
  componentDidMount(){
    AOS.init();
  }
  render() { 
    return (
      <div className="App">
      <Nav />
        <Switch>
          <Route exact path='/' render={()=><Redirect to='/home'/>}/>
          <Route path='/home'component={Home}/>
          <Route path='/contact' component={Contact}/>
        </Switch>
      </div>
    );
  }
}

export default App;
