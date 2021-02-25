/* eslint-disable react/jsx-pascal-case */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getMonstersByCR } from '../actions/actions'

class Filter extends Component {
    constructor() {
        super()
        this.state = {

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
        this.props.getMonstersByCR(event.target.value)
    }

    render() {
        const CRList = ['select', 0, .125, .25, .5, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
            var opts = CRList.map((item, index) => {
                return (
                    <option value={item} key={item}>{item}</option>
                    )
                })

            return (
                <>
                    <form onChange={this.handleClick}>
                    <label>filter monsters by challenge rating</label>
                        <select>
                            {opts}
                        </select>
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

export default connect(mapStateToProps, {getMonstersByCR})(Filter)