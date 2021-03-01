import React, { Component } from 'react'
import { searchMonster } from '../actions/actions'
import { connect } from 'react-redux'
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

  handleClick(monsterList, event) {
    event.preventDefault()
    this.props.searchMonster(monsterList, this.state.monsterName)
    this.clearInput()
  }

  checkEnter(monsterList, event) {
    if (event.keyCode === 13) {
      this.handleClick(monsterList, event)
    }
  }

  clearInput() {
    this.setState({
      monsterName: ""
    })
  }
  
  render(){  
    // searches the displayed list of monsters by name
    const monsterList = this.props.monsters
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
              onKeyDown={(event) => this.checkEnter(monsterList, event)}
            ></input>
            <button 
              className="search-btn"
              onClick={(event) => this.handleClick(monsterList, event)}
            ><img className="dice" src={ dice } alt="a d20"/></button>
          </form>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  monsters: state.monsters.monsters
})

export default connect(mapStateToProps, { searchMonster })(Search);