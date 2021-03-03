import { Link } from 'react-router-dom'
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
        <Link 
          to="/" 
          type="button"
          onClick={this.handleClick} 
          className="show-all-btn">Show All Monsters
        </Link>
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