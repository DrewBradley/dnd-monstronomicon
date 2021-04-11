import React from "react"
import { connect } from "react-redux"
import { getOneMonster } from "../../actions/actions"
import PropTypes from "prop-types"

const DamageImmunities = ({ statBlock }) => {

  if (statBlock) {

    const damageImmunities = statBlock.map((ability, index) => {
      return (
        <div key={index}>
          <p>{ability}</p>
        </div>
      )
    })

    return <div>{damageImmunities}</div>
    
  } else {
    return null
  }
}

DamageImmunities.propTypes = {
  getOneMonster: PropTypes.func.isRequired,
  monster: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  monster: state.monsters.monster
})

export default connect(mapStateToProps, { getOneMonster })(DamageImmunities)
