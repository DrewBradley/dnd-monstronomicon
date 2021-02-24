import React, { Component } from 'react'
import { Route, Switch, NavLink, Link } from 'react-router-dom'
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
    console.log(this.props)
    const monsterLinks = this.props.monsters.map(monster => {
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

const mapStateToProps = (state) => ({
  monsters: state.monsters.monsters.results,
})

export default connect(mapStateToProps, {getMonsters})(App);
