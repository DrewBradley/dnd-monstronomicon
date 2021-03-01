import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import './Encounter.css'
import PropTypes from 'prop-types';
import { removeFromEncounter } from '../actions/actions'

class Encounter extends Component {
  render() {
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
          <button className="delete-button" onClick={() => this.props.removeFromEncounter(i, this.props.encounter)}>X<span className="delete-tooltip">⬅ remove monster</span></button>
        </div>
      )
    })
    return (
      <div className="encounter-list">
          { encounterMonster }
      </div>
    )
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
