import React, { Component } from 'react'
import { Route, Switch, Link } from 'react-router-dom'
import Display from './Display'
import Monster from './Monster'
import Header from './Header'
import Encounter from './Encounter'
import './App.css';
import PropTypes from 'prop-types';
import { getMonsters } from '../actions/actions'
import { connect } from 'react-redux'

class App extends Component {
  
  componentDidMount() {
    this.props.getMonsters()
  }
  
  render() {
    // if monsters is in state and there's no search term
    if (this.props.monsters && !this.props.search.length) {
      var monsterLinks = this.props.monsters.map(monster => {
        return  (
          <div key={monster.index}>
            <Link to={{
              pathname: `/monster/${monster.index}`,
              state: {url: monster.url}
            }}>
              {monster.name}
            </Link>
          <br></br>
        </div>
      )
    })
    // if there is a search term
    } else if (this.props.search) {
      monsterLinks = this.props.search.map(monster => {
        return  (
          <div key={monster.index}>
            <Link to={{
              pathname: `/monster/${monster.index}`,
              state: {url: monster.url}
            }}>
              {monster.name}
            </Link>
          <br></br>
        </div>
      )
    })

    } else if (this.props.monsters) {
      console.log('in app 52')
      monsterLinks = this.props.search.map(monster => {
        return  (
          <div key={monster.index}>
            <Link to={{
              pathname: `/monster/${monster.index}`,
              state: {url: monster.url}
            }}>
              {monster.name}
            </Link>
          <br></br>
        </div>
      )
    })

    } else {
      return null
    }

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
  getMonsters: PropTypes.func,
  monsters: PropTypes.array,
}

const mapStateToProps = (state) => ({
  monsters: state.monsters.monsters,
  search: state.search.search,
})

export default connect(mapStateToProps, {getMonsters})(App);
