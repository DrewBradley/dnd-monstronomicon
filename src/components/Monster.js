import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getOneMonster } from '../actions/actions'

class Monster extends Component {
    // constructor() {
    //     super()
    //     this.state = {
    //         deepMonster: {}
    //     }
    // }

    componentDidMount() {
        this.props.getOneMonster(this.props.location.state.url)
    }
    
    render() {
        if (this.props.monster.url === this.props.location.state.url) {
            return (
                <div>Monster<br></br>
                    name {this.props.monster.name}<br></br>
                    size {this.props.monster.size}<br></br>
                    type {this.props.monster.type}<br></br>
                    CR {this.props.monster.challenge_rating}<br></br><br></br>
                    <button>click to add to encounter</button>
                </div>
            )
        } else {
            return null
        }
    }
}

const mapStateToProps = (state) => ({
    monster: state.monsters.monster
})

export default connect(mapStateToProps, {getOneMonster})(Monster)