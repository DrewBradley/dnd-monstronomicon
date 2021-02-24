import React, { Component } from 'react'
import { getOneMonster } from '../actions/actions'
// make singleMonster api call here when the component mounts

class Monster extends Component {
    constructor() {
        super()
        this.state = {
            deepMonster: {}
        }
    }

    componentDidMount() {
      getOneMonster(this.props.location.state.url)
    }
        
    render() {
        return (
            <div>Monster<br></br>
            {this.state.deepMonster.name}<br></br>
            {this.state.deepMonster.charisma}<br></br>
            {this.state.deepMonster.size}
            </div>
        )
    }
}
export default Monster