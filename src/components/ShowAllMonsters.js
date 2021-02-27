import React, { Component } from 'react'
import { searchMonster } from '../actions/actions'
import { connect } from 'react-redux'

class ShowAllMonsters extends Component {
  render(){
    const monsterList = this.props.monsters
    return(
      <div className="nav-button">
        <button 
          className="show-all-btn"
          onClick={() => this.props.searchMonster
          (monsterList)}>
          Show All
        </button>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  monsters: state.monsters.monsters,
})

export default connect(mapStateToProps, { searchMonster })(ShowAllMonsters);