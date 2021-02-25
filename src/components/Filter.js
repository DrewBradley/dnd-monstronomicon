/* eslint-disable react/jsx-pascal-case */
import React, { Component } from 'react'
import { connect } from 'react-redux'

class Filter extends Component {
    constructor() {
        super()
        this.state = {
            challengeRating: 0
        }
        this.handleClick = this.handleClick.bind(this)
    }

// dropdown list - selection sets CR variable
// CR variable is passed through to the fetch call
// the fetch passes that group of monsters into state
// then we update/render the new list of monsters in Display

    componentDidMount() {

    }
    
    handleClick(event) {
        event.preventDefault()
        this.setState({ challengeRating: event.target.value })
        console.log(event.target.value)
    }

    render() {
        const CRList = ['select', 0, .125, .25, .5, 1, 2, 3, 4]
            var opts = CRList.map((item, index) => {
                return (
                    <option value={item} key={item}>{item}</option>
                    )
                })

            return (
                <>
                    <form onSubmit={this.handleClick}>
                        <select>
                            {opts}
                        </select>
                        <button>filter by challenge rating</button>
                    </form>
                </>
            )
        }
    }


const mapStateToProps = (state) => {
    return {
        monster: state.monsters.monster
    }
}

export default connect(mapStateToProps, {})(Filter)