import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import './Encounter.css'
import { removeFromEncounter } from '../actions/actions'
import PropTypes from 'prop-types';

class Encounter extends Component {
  render() {
    if(!this.props.encounter.length) {
      return (
        <h2>
          You have no monsters in your encounter.
        </h2>
      )
    } else {  
      const encounterMonster = this.props.encounter.map((monster, i) => {
        return (
          <div key={i} className="encounter-element">
          <Link to={{
            pathname: `/monster/${monster.monsterIndex}`,
            state: {url: monster.monsterUrl}
          }}>
            <div className="encounter-tag">
              {monster.monsterName} 
            </div>
          </Link>
          <button 
            className="delete-button" 
            onClick={() => this.props.removeFromEncounter(i, this.props.encounter)}>X
            <span className="delete-tooltip">⬅ remove monster
            </span>
          </button>
        </div>
      )
    })

    return (
      <div className="encounter-list">
          { encounterMonster }
      </div>
    )}
  }
}

Encounter.propTypes = {
  removeFromEncounter: PropTypes.func,
  encounter: PropTypes.array,
}

const mapStateToProps = (state) => ({
  monsters: state.monsters.monsters,
  encounter: state.encounter.encounter
})

export default connect(mapStateToProps, { removeFromEncounter })(Encounter);
