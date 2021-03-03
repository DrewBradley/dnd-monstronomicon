import React, { Component } from 'react'
import { Route, Switch, Link, Redirect } from 'react-router-dom'
import Display from './Display'
import Monster from './Monster'
import Header from './Header'
import Encounter from './Encounter'
import './App.css';
import PropTypes from 'prop-types';
import { getMonsters } from '../actions/actions'
import { connect } from 'react-redux'
import Splash from './Splash'

class App extends Component {
  
  componentDidMount() {
    this.props.getMonsters()
  }
  
  render() {   
    // if monsters is in state and there's no search term
    if (this.props.monsters.length && !this.props.results.length) {
      var monsterLinks = this.props.monsters.map(monster => {
        return  (
          <div key={monster.index}>
            <Link to={{
              pathname: `/monster/${monster.index}`,
              state: {url: monster.url}
            }}>
              <div className="monster-tag">
                {monster.name}
              </div>
            </Link>
          </div>
      )
    })
  }
    // if the result is 'not found'
    else if (this.props.results[0] === 'not found') {
          monsterLinks = `No results for "${this.props.results[1]}". 'Show All Monsters' to reset.`  
    // if there is a search term
    } else if (this.props.results.length) {
      monsterLinks = this.props.results.map(monster => {
        return  (
          <div key={monster.index}>
            <Link to={{
              pathname: `/monster/${monster.index}`,
              state: {url: monster.url}
            }}>
              <div className="monster-tag">
                {monster.name}
              </div>
            </Link>
          </div>
        )
      })
    } 

    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" render = {() => <Display monsterLinks={monsterLinks}/>}/>
          <Route path="/encounter" component={Encounter} />
          <Route path="/monster/" component={Monster} />
          <Route path="/*" component={Splash}/>
        </Switch>
      </div>
    );
  }
}

App.propTypes = {
  getMonsters: PropTypes.func,
  monsters: PropTypes.array,
  results: PropTypes.array,
}

const mapStateToProps = (state) => ({
  monsters: state.monsters.monsters,
  results: state.returned.returned
})

export default connect(mapStateToProps, { getMonsters })(App);
