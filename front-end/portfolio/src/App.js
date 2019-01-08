import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Switch, Redirect, Route } from 'react-router-dom';
import Nav from './Components/Nav';
import Home from './Components/Home';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Nav />
      <Router>
        <Switch>
          <Route exact path='/' render={()=><Redirect to='/home'/>}/>
          <Route path='/home'component={Home}/>
        </Switch>
      </Router>
      </div>
    );
  }
}

export default App;
