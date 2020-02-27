import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from './components/Home'
import Service from './components/Service'
import About from './components/About'
import Nav from './components/Nav'

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/service' component={Service} />
        <Route path='/about' component={About}/>
        <Route component={() => <div>Page 404!</div>} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
