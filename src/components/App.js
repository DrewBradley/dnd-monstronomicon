import React from 'react'
import { Route, Switch, NavLink, Link } from 'react-router-dom'
import Encounter from './Encounter'
import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/home" component={App} />
        <Route path="/encounter" component={Encounter} />
      </Switch>
    </div>
  );
}

export default App;
