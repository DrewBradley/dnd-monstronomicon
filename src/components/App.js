import React, { Component } from 'react'
import { Route, Switch, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import Display from './Display'
import Encounter from './Encounter'
import Header from './Header'
import Monster from './Monster'
import Splash from './Splash'
import './App.css';
import { getMonsters } from '../actions/actions'
import PropTypes from 'prop-types';

class App extends Component {
  
  componentDidMount() {
    this.props.getMonsters()
  }
  
  render() {   

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
    } else if (this.props.results[0] === 'not found') {
          monsterLinks = `No results for "${this.props.results[1]}". 'Show All Monsters' to reset.`  
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
