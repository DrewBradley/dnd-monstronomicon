import React, { Component } from 'react'
import { searchMonster } from '../actions/actions'
import { connect } from 'react-redux'
import './Search.css'

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
    const monsterList = this.props.monsters
    return (
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
          >🔍</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  monsters: state.monsters.monsters,
})

export default connect(mapStateToProps, { searchMonster })(Search);