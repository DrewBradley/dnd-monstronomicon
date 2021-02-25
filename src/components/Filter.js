/* eslint-disable react/jsx-pascal-case */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getMonstersByCR } from '../actions/actions'

class Filter extends Component {
    constructor() {
        super()
        this.state = {}
        this.handleClick = this.handleClick.bind(this)
    }
    
    handleClick(event) {
        event.preventDefault()
        this.props.getMonstersByCR(event.target.value)
    }

    render() {
        const CRList = ['select', 0, .125, .25, .5, 1, 2, 3, 4, 5, 6, 
            7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 
            22, 23, 24, 25, 26, 27, 28, 29, 30]
            var opts = CRList.map((item, index) => {
                return (
                    <option value={item} key={item}>{item}</option>
                    )
                })

            return (
                    <form onChange={this.handleClick}>
                    <label>filter monsters by challenge rating</label>
                        <select>
                            {opts}
                        </select>
                    </form>
            )
        }
    }


const mapStateToProps = (state) => {
    return {
        monster: state.monsters.monster
    }
}

export default connect(mapStateToProps, {getMonstersByCR})(Filter)