import React, { PureComponent } from 'react';
import { Switch, Route } from 'react-router-dom';
import { hot } from 'react-hot-loader';
import Home from './Home';
import TicTacToe from './TicTacToe/Game';
import '../styles/base';

const Error = () => <h1>Oops! Page not found!</h1>;

class App extends PureComponent {
  render() {
    return (
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/tic-tac-toe" component={TicTacToe} />
          <Route component={Error} />
        </Switch>
      </main>
    );
  }
}

export default hot(module)(App);
