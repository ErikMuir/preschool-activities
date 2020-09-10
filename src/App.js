import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import './styles/app.module';

class App extends Component {
  render() {
    return (
      <div className="app">
        <h1> Preschool Activities </h1>
      </div>
    );
  }
}

export default hot(module)(App);
