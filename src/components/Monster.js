import React, { Component } from "react"
import { connect } from "react-redux"
import "./Monster.css"
import { getOneMonster, addToEncounter } from "../actions/actions"
import PropTypes from "prop-types"
import SpecialAbilities from "./MonsterStats/SpecialAbilities"
import Proficiencies from "./MonsterStats/Proficiencies"
import Immunities from "./MonsterStats/ConditionImmunities"

class Monster extends Component {
  constructor() {
    super()
    this.state = {}
    this.clickHandler = this.clickHandler.bind(this)
  }

  componentDidMount() {
    this.props.getOneMonster(this.props.location.state.url)
  }

  clickHandler() {
    this.props.addToEncounter(
      this.props.monster.name,
      this.props.monster.index,
      this.props.location.state.url,
      this.props.encounter
    )
  }

  // const DI = monster.damage_immunities.map((DI, i) => {
  //     return monster.damage_immunities ?
  //     <div key={i}><p className="stat-detail">{DI}</p></div> :
  //     <div><p className="stat-detail">DAMAGE IMMUNITIES: n/a</p></div>
  // })
  // const DR = monster.damage_resistances.map((DR, i) => {
  //     return monster.damage_resistances ?
  //     <div key={i}><p className="stat-detail">{DR}</p></div> :
  //     <div><p className="stat-detail">DAMAGE RESISTANCES: n/a</p></div>
  // })
  // const DV = monster.damage_vulnerabilities.map((DV, i) => {
  //     return monster.damage_vulnerabilities ?
  //     <div key={i}><p className="stat-detail">{DV}</p></div> :
  //     <div><p className="stat-detail">DAMAGE VULNERABILITIES: n/a</p></div>
  // })
  // if (monster.actions) {
  //     var actions = monster.actions.map((action, i) => {
  //         return (
  //             <div key={i}>
  //                 <div className="stat-detail">{action.name}: {action.desc}</div>
  //             </div>
  //         )
  //     })
  // }
  // if (monster.legendary_actions) {
  //     var legendaryActions = monster.legendary_actions.map((action, i) => {
  //         return (
  //             <div key={i}>
  //                 <div className="stat-detail">{action.name}: {action.desc}</div>
  //             </div>
  //         )
  //     })
  // }
  // const legendary = monster.legendary_actions ?
  //     <div className="one-stat legendary-actions">LEGENDARY ACTIONS: {legendaryActions}</div> :
  //     <div className="one-stat legendary-actions">LEGENDARY ACTIONS: n/a</div>
  // const special = monster.special_abilities ?
  //     <div className="one-stat special-abilities">SPECIAL ABILITIES: n/a</div> :
  //     <div className="one-stat special-abilities">SPECIAL ABILITIES: {specialAbilities}</div>

  render() {
    if (this.props.monster.url === this.props.location.state.url) {

      return (
        <div className="monster-stats">
          <h3>Special Abilities</h3>
          <SpecialAbilities statBlock={this.props.monster.special_abilities} />

          <h3>Proficiencies</h3>
          <Proficiencies statBlock={this.props.monster.proficiencies} />

          <h3>Condition Immunities</h3>
          <Immunities statBlock={this.props.monster.condition_immunities} />

          {/* <h3>Damage Immunities</h3>
          <Immunities statBlock={this.props.monster.damage_immunities} /> */}
        </div>
      )}

    else {
        return null
    }
  }
}
/* <button className="add-button" onClick={this.clickHandler}>ADD TO ENCOUNTER</button>
                <br></br>
                <div className="name-box">
                    <p className="one-stat name">NAME: <span>{monster.name}</span></p>
                    <p className="one-stat type">TYPE: <span>{monster.type}</span></p>
                    {subtype}
                    <p className="one-stat alignment">ALIGNMENT: <span>{monster.alignment}</span></p>
                    <p className="one-stat xp">XP: <span>{monster.xp}</span></p>
                    <p className="one-stat languages">LANGUAGES: <span>{monster.languages}</span></p>
                </div>
                
                <div className="size-box">
                    <p className="one-stat size">SIZE: <span>{monster.size}</span></p>
                    <p className="one-stat challenge-rating">CHALLENGE RATING: <span>{monster.challenge_rating}</span></p>
                    <p className="one-stat hit-dice">HIT DICE: <span>{monster.hit_dice}</span></p>
                    <p className="one-stat hit-points">HIT POINTS: <span>{monster.hit_points}</span></p>
                    <p className="one-stat armor-class">ARMOR CLASS: <span>{monster.armor_class}</span></p>
                    <div className="one-stat proficiencies">PROFICIENCIES: {proficiencies}</div>
                </div>

                <div className="modifier-box">
                    <p className="one-stat charisma">CHARISMA: <span>{monster.charisma}</span></p>
                    <p className="one-stat constitution">CONSTITUTION: <span>{monster.constitution}</span></p>
                    <p className="one-stat dexterity">DEXTERITY: <span>{monster.dexterity}</span></p>
                    <p className="one-stat intelligence">INTELLIGENCE: <span>{monster.intelligence}</span></p>
                    <p className="one-stat strength">STRENGTH: <span>{monster.strength}</span></p>
                    <p className="one-stat wisdom">WISDOM: <span>{monster.wisdom}</span></p>
                </div>

                <div className="immunities-box">
                    <div className="one-stat damage-vulnerabilities">DAMAGE VULNERABILITIES: {DV}</div>
                    <div className="one-stat damage-resistances">DAMAGE RESISTANCES: {DR}</div>
                    <div className="one-stat condition-immunities">CONDITION IMMUNITIES: {CI}</div>
                    <div className="one-stat damage-immunities">DAMAGE IMMUNITIES: {DI}</div>
                </div>
                
                <div className="one-stat actions">ACTIONS: {actions}</div>
                <div className="legendary"> {legendary}
                </div>
                {special}                    */

Monster.propTypes = {
  getOneMonster: PropTypes.func.isRequired,
  location: PropTypes.object.isRequired,
  monster: PropTypes.object.isRequired,
  encounter: PropTypes.array.isRequired,
}

const mapStateToProps = (state) => ({
  monster: state.monsters.monster,
  encounter: state.encounter.encounter,
})

export default connect(mapStateToProps, { getOneMonster, addToEncounter })(
  Monster
)
