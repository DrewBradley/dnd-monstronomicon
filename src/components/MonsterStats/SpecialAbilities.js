import React from "react"
import { connect } from "react-redux"
import { getOneMonster } from "../../actions/actions"
import PropTypes from "prop-types"

const SpecialAbilities = ({ statBlock }) => {

  if (statBlock) {
    const specialAbilities = statBlock.map((ability, index) => {
      return (
        <div key={index}>
          <p>{ability.name}</p>
          <p>Description: {ability.desc}</p>
        </div>
      )
    })

    return <div>{specialAbilities}</div>
    
  } else {
    return null
  }
}

SpecialAbilities.propTypes = {
  getOneMonster: PropTypes.func.isRequired,
  monster: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  monster: state.monsters.monster
})

export default connect(mapStateToProps, { getOneMonster })(SpecialAbilities)
