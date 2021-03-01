import React, { Component } from 'react'
import { searchMonster } from '../actions/actions'
import { connect } from 'react-redux'

class ShowAllMonsters extends Component {
constructor() {
        super()
        this.state = {}
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
      this.props.searchMonster(this.props.monsters, '')
      // also change url to home page
    }

  render(){
    return(
      <div className="nav-button">
        <button 
          className="show-all-btn"
          onClick={this.handleClick}>
          Show All Monsters
        </button>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  monsters: state.monsters.monsters,
})

export default connect(mapStateToProps, { searchMonster })(ShowAllMonsters);