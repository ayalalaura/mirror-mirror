import React, { Component } from 'react';
import './App.css'; // App styling
import Clock from './components/Clock'; // Clock component
import Weather from './components/Weather'; // Weather component
import Transit from './components/Transit'; // Transit component
import Face from './components/Face'; // Face component
import Quote from './components/Quote'; // Quote component

class App extends Component {

  // constructor - initial state is an empty object
  constructor() {
    super();
    this.state = {
    };
  }

  // rendering the components
  render() {

    return (
      <div className="container">
        <div className="left-side">
          <Clock />
          <Weather />
          <Transit />
        </div>
        <div className="right-side">
          <Face />
          <Quote />
        </div>
      </div>
    );
  }
}

export default App;
