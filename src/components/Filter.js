import React, { Component } from 'react'
import { connect } from 'react-redux'
import { populateCRList } from '../actions/actions'



class Filter extends Component {
// create select tag 
// grab this.props.CRList
// populate the select tag
// profit
    componentDidMount() {
        const CRList = [1,2,3]
        this.props.populateCRList(CRList)
    }
    
    render() {
        if (this.props.CRList) {
            console.log(this.props.CRList)
            var options = this.props.CRList.map(item => {
                return (
                    <option key={item} textContent="item" value={item}></option>
                    )
                })
        } else {
            return (
                <>
                    <div>Filter</div>
                    <form onSubmit={this.props.handleClick}>
                        <select name="CR" id="CR">
                            {options}
                        </select> 
                        <button>filter by CR</button>
                    </form>
                </>
            )
        }
    }
}

const mapStateToProps = (state) => {
    return {
        monster: state.monsters.monster
    }
}

export default connect(mapStateToProps, {populateCRList})(Filter)