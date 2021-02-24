import React, { Component } from 'react'
import { Route, Switch, NavLink, Link } from 'react-router-dom'
import Display from './Display'
import Monster from './Monster'
import Header from './Header'
import Encounter from './Encounter'
import './App.css';
import PropTypes from 'prop-types';


class App extends Component {
  constructor() {
    super()
    this.state = {
      monsters: []
    }
  }

  componentDidMount() {
    this.getMonsters()
  }
  
  getMonsters() {
    fetch('https://www.dnd5eapi.co/api/monsters')
    .then(response => response.json())
    .then(data => this.setState({ monsters: data.results }))
  }

  render() {
    const monsterLinks = this.state.monsters.map(monster => {
      return  (
        <>
          <Link to={{
            pathname: `/monster/${monster.index}`,
            state: { 
              url: monster.url
              }
          }}>
            {monster.name}
          </Link>
          <br></br>
        </>
      )
    })

    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" render = {() => <Display monsterLinks={monsterLinks}/>}/>
          <Route path="/encounter" component={Encounter} />
          <Route path="/monster/" component={Monster} />
        </Switch>
      </div>
    );
  }
}

App.propTypes = {
  // monster: PropTypes.object.isRequired,
}

export default App;
