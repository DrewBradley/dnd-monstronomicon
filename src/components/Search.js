import React, { Component } from 'react'
import './Search.css'

class Search extends Component {
  constructor() {
    super()
    this.state = {
      searchMonster: ""
    }
  }
  
  render(){
    console.log(this.state)
    return (
        <div className="search-field">
          <input 
            type="text"
            placeholder="Search by name"
            name="search"
            className="search-input"
            value={this.state.searchMonster}
            ></input>
          <button className="search-btn">🔍</button>
        </div>
    )
  }
}

export default Search