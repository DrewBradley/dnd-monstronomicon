import React from "react"
import { connect } from "react-redux"
import { getOneMonster } from "../../actions/actions"
import PropTypes from "prop-types"

const ConditionImmunities = ({ statBlock }) => {

  if (statBlock) {

    const conditionImmunities = statBlock.map((ability, index) => {
      return (
        <div key={index}>
          <p>{ability.name}</p>
        </div>
      )
    })

    return <div>{conditionImmunities}</div>
    
  } else {
    return null
  }
}

ConditionImmunities.propTypes = {
  getOneMonster: PropTypes.func.isRequired,
  monster: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  monster: state.monsters.monster
})

export default connect(mapStateToProps, { getOneMonster })(ConditionImmunities)
