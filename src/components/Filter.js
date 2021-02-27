import React, { Component } from 'react'
import { getMonstersByCR } from '../actions/actions'
import { connect } from 'react-redux'
import './Filter.css'
import dice from '../light-die.svg'

class Filter extends Component {
    constructor() {
        super()
        this.state = {
            CR: 0
        }
        this.handleClick = this.handleClick.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }
    
    handleChange(event) {
        this.setState({ CR: event.target.value })
    }

    handleClick(event) {
        event.preventDefault()
        this.props.getMonstersByCR(this.state.CR)
        this.clearInput()
    }
    
    clearInput() {
        this.setState({
            CR: ''
        })
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
            <div className="nav-button">
                <form className="filter-form" onChange={this.handleChange}>
                <label className="filter-label">Challenge Rating</label>
                    <select className="filter-select">
                        {opts}
                    </select>
                    <button className="filter-button" onClick={this.handleClick}><img className="dice" src={ dice } /></button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({

})

export default connect(mapStateToProps, { getMonstersByCR })(Filter)