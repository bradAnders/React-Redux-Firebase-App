import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Dashboard from './components/dashboard/Dashboard';
import ProjectDetails from './components/projects/ProjectDetails';
import CreateProject from './components/projects/CreateProject';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';

class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar/>
        </div>
        <Switch>
          <Route exact path='/' component={ Dashboard } />
          <Route path='/create' component={ CreateProject } />
          <Route path='/project/:id' component={ ProjectDetails } />
          <Route path='/signin' component={ SignIn } />
          <Route path='/signup' component={ SignUp } />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
