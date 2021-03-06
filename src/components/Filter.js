import React, { Component } from 'react'
import { connect } from 'react-redux'
import dice from '../light-die.svg'
import { getMonstersByCR } from '../actions/actions'
import PropTypes from 'prop-types';

class Filter extends Component {
    constructor() {
        super()
        this.state = {
            CR: NaN
        }
        this.handleClick = this.handleClick.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }
    
    handleChange(event) {
        this.setState({ CR: event.target.value })
    }

    handleClick(event) {
        event.preventDefault()
        this.state.CR ?
        this.props.getMonstersByCR(this.state.CR) &&
        this.resetState() :
        this.resetState()
    }
    
    resetState() {
      this.setState({
        CR: NaN
      })
    }
    
    render() {
        const CRList = [0, .125, .25, .5, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 19, 20, 21, 22, 23, 24, 30]
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
                    <button className="filter-button" onClick={this.handleClick}><img className="dice" src={ dice } alt="a d20"/></button>
                </form>
            </div>
        )
    }
}

Filter.propTypes = {
  getMonstersByCR: PropTypes.func
}

const mapStateToProps = (state) => ({})

export default connect(mapStateToProps, { getMonstersByCR })(Filter)