import React from "react"
import { connect } from "react-redux"
import { getOneMonster } from "../../actions/actions"
import PropTypes from "prop-types"

const Proficiencies = ({ statBlock }) => {

  if (statBlock) {

    const proficiencies = statBlock.map((ability, index) => {
      return (
        <div key={index}>

          <p>{ability.proficiency.name}</p>
          <p>Value: {ability.value}</p>
        </div>
      )
    })

    return <div>{proficiencies}</div>
    
  } else {
    return null
  }
}

Proficiencies.propTypes = {
  getOneMonster: PropTypes.func.isRequired,
  monster: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  monster: state.monsters.monster
})

export default connect(mapStateToProps, { getOneMonster })(Proficiencies)
