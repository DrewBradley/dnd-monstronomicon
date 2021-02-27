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
  }

  handleChange(event) {
    const {value} = event.target
    this.setState({
      monsterName: value
    })
  }

  handleClick(monsterList) {
    this.props.searchMonster(monsterList, this.state.monsterName)
    this.clearInput()
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
            ></input>
          <button 
            className="search-btn"
            onClick={() => this.handleClick(monsterList)}
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