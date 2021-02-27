import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { searchMonster } from '../actions/actions'
import { connect } from 'react-redux'

class ShowAllMonsters extends Component {
  render(){
    const monsterList = this.props.monsters
    return(
      <button 
        className="show-all-btn"
        onClick={() => this.props.searchMonster
        (monsterList)}>
        Show All
      </button>
    )
  }
}

const mapStateToProps = (state) => ({
  monsters: state.monsters.monsters,
})

export default connect(mapStateToProps, { searchMonster })(ShowAllMonsters);