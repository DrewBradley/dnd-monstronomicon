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
    this.props.searchMonster(monsterList, this.state.monsterName)
    this.clearInput()
  }

  checkEnter(monsterList, event) {
    if (event.keyCode === 13) {
      this.handleClick(monsterList)
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
        <div className="search-field">
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
            type="submit"
            onSubmit={(event) => this.handleClick(monsterList)}
            ><img className="dice" src={ dice } alt="a d20"/></button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  monsters: state.monsters.monsters
})

export default connect(mapStateToProps, { searchMonster })(Search);