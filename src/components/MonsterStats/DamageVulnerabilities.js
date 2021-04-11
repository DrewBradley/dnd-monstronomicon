import React from "react"
import { connect } from "react-redux"
import { getOneMonster } from "../../actions/actions"
import PropTypes from "prop-types"

const DamageVulnerabilities = ({ statBlock }) => {

  if (statBlock) {

    const damageVulnerabilities = statBlock.map((ability, index) => {
      return (
        <div key={index}>
          <p>{ability}</p>
        </div>
      )
    })

    return <div>{damageVulnerabilities}</div>
    
  } else {
    return null
  }
}

DamageVulnerabilities.propTypes = {
  getOneMonster: PropTypes.func.isRequired,
  monster: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
  monster: state.monsters.monster
})

export default connect(mapStateToProps, { getOneMonster })(
  DamageVulnerabilities
)
