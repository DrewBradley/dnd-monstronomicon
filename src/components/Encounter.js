import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import './Encounter.css'

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
          <button class="delete-button" onClick={() => console.log("BYE BYE BYE")}>X<span class="delete-tooltip">⬅ remove monster</span></button>
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
  // getMonsters: PropTypes.func,
  // monsters: PropTypes.array,
}

const mapStateToProps = (state) => ({
  monsters: state.monsters.monsters,
  encounter: state.encounter.encounter
})

export default connect(mapStateToProps, {  })(Encounter);

// on a Monster's page, click a button
// send that Monster's index and name to the store
// so that we can create the buttons for each monster
// into an array called encounter
// or maybe into an object? because there can be more than one of the same monster in an encounter
// when Encounter renders, draw all the buttons for the monsters in that array
// yes it should be an array, that's how we're rendering the home page
// then it's just like the home page - individual API call for each button click
// on the Encounter page, need to have a "remove from array" button
// that takes that monster out of the array in the store