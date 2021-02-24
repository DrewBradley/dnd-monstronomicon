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
  
  render(){
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
            onClick={() => this.props.searchMonster(this.props.monsters, this.state.monsterName)}
            >🔍</button>
        </div>
    )
  }
}

const mapStateToProps = (state) => ({
  monsters: state.monsters.monsters.results,
})

export default connect(mapStateToProps, {searchMonster})(Search);