import React from "react"
import { connect } from "react-redux"
import { getOneMonster } from "../../actions/actions"
import PropTypes from "prop-types"

const LegendaryActions = ({ statBlock }) => {
  if (statBlock) {

    const legendaryActions = statBlock.map((ability, index) => {
      return (
        <div key={index}>
          <p>{ability.name}</p>
          <p>Description: {ability.desc}</p>
        </div>
      )
    })

    return <div>{legendaryActions}</div>
  } else {
    return null
  }
}

LegendaryActions.propTypes = {
  getOneMonster: PropTypes.func.isRequired,
  monster: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  monster: state.monsters.monster
})

export default connect(mapStateToProps, { getOneMonster })(LegendaryActions)
