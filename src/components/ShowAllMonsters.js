import React from 'react'
import { searchMonster } from '../actions/actions'
import { connect } from 'react-redux'
import './ShowAllMonsters.css'

const ShowAllMonsters = () => {
  const monsterList = this.props.monsters
  return(
    <button 
      className="show-all-btn"
      onClick={() => this.props.searchMonster(monsterList)}>
      Show All
    </button>
  )
}

const mapStateToProps = (state) => ({
  monsters: state.monsters.monsters,
})

export default connect(mapStateToProps, { searchMonster })(ShowAllMonsters);