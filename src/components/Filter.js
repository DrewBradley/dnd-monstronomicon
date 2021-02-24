import React, { Component } from 'react'
import { connect } from 'react-redux'



class Filter extends Component {
// create select tag 
// grab this.props.CRList
// populate the select tag
// profit


    render() {
        if(this.props.CRList) {
            var options = this.props.CRList.map(item => {
                return (
                    <option textContent="item" value={item}></option>
                )
            })
        }

        return (
            <>
                <div>Filter</div>
                <form>
                <select name="CR" id="CR"></select> 
                <button onClick={this.props.handleClick}>filter by CR</button>
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