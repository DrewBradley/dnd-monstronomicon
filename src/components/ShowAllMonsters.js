import React, { Component } from 'react'
import { searchMonster } from '../actions/actions'
import PropTypes from 'prop-types';
import { connect } from 'react-redux'

class ShowAllMonsters extends Component {
constructor() {
        super()
        this.state = {}
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
      this.props.searchMonster(this.props.monsters, '')
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

ShowAllMonsters.propTypes = {
  searchMonster: PropTypes.func,
  monsters: PropTypes.array,
}

const mapStateToProps = (state) => ({
  monsters: state.monsters.monsters
})

export default connect(mapStateToProps, { searchMonster })(ShowAllMonsters);