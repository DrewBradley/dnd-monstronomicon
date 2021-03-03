import React, { Component } from 'react'
import { connect } from 'react-redux'
import dice from '../light-die.svg'
import { searchMonster } from '../actions/actions'
import PropTypes from 'prop-types';

class Search extends Component {
  constructor() {
    super()
    this.state = {
      monsterName: ""
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  handleChange(event) {
    const {value} = event.target
    this.setState({ monsterName: value.toLowerCase() })
  }

  handleClick(event) {
    event.preventDefault()
    this.props.searchMonster(this.props.monsters, this.state.monsterName)
    this.clearInput()
  }
  
  clearInput() {
    this.setState({ monsterName: "" })
  }
  
  render(){  
    return (
      <div className="nav-button">
        <div className="search-field1">
          <form className="search-field">
            <input 
              type="text"
              placeholder="Search by name"
              name="search"
              className="search-input"
              value={this.state.monsterName}
              onChange={this.handleChange}
            ></input>
            <button 
              className="search-btn"
              onClick={(event) => this.handleClick(event)}
            ><img className="dice" src={ dice } alt="a d20"/></button>
          </form>
        </div>
      </div>
    )
  }
}

Search.propTypes = {
  searchMonster: PropTypes.func,
  monsters: PropTypes.array,
  returned: PropTypes.array,
  notFound: PropTypes.bool
}

const mapStateToProps = (state) => ({
  monsters: state.monsters.monsters,
  returned: state.returned.returned,
  notFound: state.notFound
})

export default connect(mapStateToProps, { searchMonster })(Search);