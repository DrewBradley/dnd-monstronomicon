import React, { Component } from 'react'
// make singleMonster api call here when the component mounts

class Monster extends Component {
    constructor() {
        super()
        this.state = {
            deepMonster: {}
        }
    }

    componentDidMount() {
        fetch(`https://www.dnd5eapi.co${this.props.location.state.url}`)
        .then(response => response.json())
        .then(data => this.setState({ deepMonster: data }))
    }
        
    render() {
        console.log(this.props.location.state)
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