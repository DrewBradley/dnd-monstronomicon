import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import Search from './Search'
import Filter from './Filter'
import ShowAllMonsters from './ShowAllMonsters'
import './Header.css'
import Ldragon from '../dragon.svg'
import Rdragon from '../dragonR.svg'


class Header extends Component {
  constructor() {
    super()
    this.state = {}
  }

  render() {
    const encounterCounter = this.props.encounter.length

    return (
      <header className="header">
            <div className="title">
              <img className="dragon" src={ Ldragon } alt="a dragon"/>
              <Link to="/home" className="app-name"><h1>MONSTRONOMICON</h1></Link>
              <img className="dragon" src={ Rdragon } alt="a dragon"/>
            </div>
            <div className="nav">
              <Search />
              <ShowAllMonsters />
              <Filter />
              <div className="nav-button">
                <Link to="/encounter" className="encounter-button">Encounter ({encounterCounter})</Link>
              </div>
            </div>
        </header>
    )
  }
}

const mapStateToProps = (state) => ({
  encounter: state.encounter.encounter
})

export default connect(mapStateToProps, {})(Header);