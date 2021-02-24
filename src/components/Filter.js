import React, { Component } from 'react'
import { connect } from 'react-redux'

class Filter extends Component {

// dropdown list - selection sets CR variable
// CR variable is passed through to the fetch call
// the fetch passes that group of monsters into state
// then we update/render the new list of monsters in Display

    componentDidMount() {
        const CRList = [1,2,3]
    }
    
    render() {
        if (this.props.CRList) {
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

export default connect(mapStateToProps, {})(Filter)