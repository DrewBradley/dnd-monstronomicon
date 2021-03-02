import React, { Component } from 'react'
import { searchMonster } from '../actions/actions'
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import dice from '../light-die.svg'

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
    this.setState({
      monsterName: value
    })
  }

  handleClick(event) {
    event.preventDefault()
    this.props.searchMonster(this.props.monsters, this.state.monsterName)
    this.clearInput()
  }

  clearInput() {
    this.setState({
      monsterName: ""
    })
  }
  
  render(){  
    // searches the displayed list of monsters by name
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
              ref={node => (this.btn = node)}
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
  monsters: PropTypes.array
}

const mapStateToProps = (state) => ({
  monsters: state.monsters.monsters
})

export default connect(mapStateToProps, { searchMonster })(Search);