import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Dashboard from './components/dashboard/Dashboard';

class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar/>
        </div>
        <Switch>
          <Route path='/' component={ Dashboard } />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
