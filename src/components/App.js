import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom'
import '../styles/App.css';

import BaseLayout from './BaseLayout'
import About from './About'
import Home from './Home'
import Portfolio from './Portfolio'


class App extends Component {
  render() {
    return (
      <div className="App">
        <BaseLayout>
          <Switch>
            <Route path='/portfolio' component={Portfolio}/>
            <Route path='/about' component={About}/>
            <Route path='/' component={Home}/>
          </Switch>
        </BaseLayout>
      </div>
    );
  }
}

export default App;
