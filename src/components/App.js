import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom'
import '../styles/App.css';

import BaseLayout from './BaseLayout'
import About from './About'
import Home from './Home'
import Contact from './Contact'
import References from './References'
import Portfolio from './Portfolio'


class App extends Component {
  render() {
    return (
      <div className="App">
        <BaseLayout>
          <Switch>
            <Route exact path='/contact' component={Contact}/>
            <Route exact path='/references' component={References}/>
            <Route exact path='/portfolio' component={Portfolio}/>
            <Route exact path='/about' component={About}/>
            <Route exact path='/' component={Home}/>
          </Switch>
        </BaseLayout>
      </div>
    );
  }
}

export default App;
