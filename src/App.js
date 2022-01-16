import React from 'react';
import { BrowserRouter, BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import './App.css';

function App() {

  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path='/' render={() => <Home />}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
