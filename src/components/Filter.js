import React, { Component } from 'react'
import { connect } from 'react-redux'

class Filter extends Component {

// dropdown list - selection sets CR variable
// CR variable is passed through to the fetch call
// the fetch passes that group of monsters into state
// then we update/render the new list of monsters in Display

    componentDidMount() {
    }
    
    render() {
        const CRList = [0, .125, .25, .5, 1, 2,3]
            var options = CRList.map(item => {
                return (
                    <Control.select  key={item} text={item} value={item} />
                    )
                })

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


const mapStateToProps = (state) => {
    return {
        monster: state.monsters.monster
    }
}

export default connect(mapStateToProps, {})(Filter)