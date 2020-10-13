import React, { PureComponent } from 'react';
import { Switch, Route } from 'react-router-dom';
import { hot } from 'react-hot-loader';
import Home from './Home/Home';
import TicTacToe from './TicTacToe/Game';
import Memory from './Memory/Game';
import styles from './app.module';
import '../styles/base';

const Error = () => <h1>Oops! Page not found!</h1>;

class App extends PureComponent {
  render() {
    return (
      <div className={styles.main_container}>
        <main>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/tic-tac-toe" component={TicTacToe} />
            <Route path="/memory" component={Memory} />
            <Route component={Error} />
          </Switch>
        </main>
      </div>
    );
  }
}

export default hot(module)(App);
