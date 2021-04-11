import React, { Component } from "react"
import { connect } from "react-redux"
import "./Monster.css"
import { getOneMonster, addToEncounter } from "../actions/actions"
import PropTypes from "prop-types"
import SpecialAbilities from "./MonsterStats/SpecialAbilities"
import Proficiencies from "./MonsterStats/Proficiencies"
import ConditionImmunities from "./MonsterStats/ConditionImmunities"
import DamageImmunities from "./MonsterStats/DamageImmunities"
import DamageResistances from "./MonsterStats/DamageResistances"
import DamageVulnerabilities from "./MonsterStats/DamageVulnerabilities"
import Actions from "./MonsterStats/Actions"
import LegendaryActions from "./MonsterStats/LegendaryActions"

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

  render() {
    if (this.props.monster.url === this.props.location.state.url) {
      return (
        <div className="monster-stats">
          <div>
            <h2>Name: {this.props.monster.name}</h2>
            <h2>Size: {this.props.monster.size}</h2>
            <h3>Alignment: {this.props.monster.alignment}</h3>
            <h3>Armor Class: {this.props.monster.armor_class}</h3>
            <h3>Hit Points: {this.props.monster.hit_points}</h3>
            <h3>Challenge Rating: {this.props.monster.challenge_rating}</h3>
            <h3>Hit Dice: {this.props.monster.hit_dice}</h3>
            <h3>Languages: {this.props.monster.languages}</h3>
          </div>
          <div>
            <h3>XP: {this.props.monster.xp}</h3>
            <h3>Strength: {this.props.monster.strength}</h3>
            <h3>Constitution: {this.props.monster.constitution}</h3>
            <h3>Dexterity: {this.props.monster.dexterity}</h3>
            <h3>Wisdom: {this.props.monster.wisdom}</h3>
            <h3>Intelligence: {this.props.monster.intelligence}</h3>
            <h3>Charisma: {this.props.monster.charisma}</h3>
          </div>
          <div>
            <h3>Special Abilities:</h3>
            <SpecialAbilities
              statBlock={this.props.monster.special_abilities}
            />
          </div>
          <div>
            <h3>Proficiencies:</h3>
            <Proficiencies statBlock={this.props.monster.proficiencies} />
          </div>
          <div>
            <h3>Condition Immunities:</h3>
            <ConditionImmunities
              statBlock={this.props.monster.condition_immunities}
            />
          </div>
          <div>
            <h3>Damage Immunities:</h3>
            <DamageImmunities
              statBlock={this.props.monster.damage_immunities}
            />
          </div>
          <div>
            <h3>Damage Resistances:</h3>
            <DamageResistances
              statBlock={this.props.monster.damage_resistances}
            />
          </div>
          <div>
            <h3>Damage Vulnerabilities:</h3>
            <DamageVulnerabilities
              statBlock={this.props.monster.damage_vulnerabilities}
            />
          </div>
          <div>
            <h3>Actions:</h3>
            <Actions statBlock={this.props.monster.actions} />
          </div>
          <div>
            <h3>Legendary Actions:</h3>
            <LegendaryActions
              statBlock={this.props.monster.legendary_actions}
            />
          </div>
        </div>
      )
    } else {
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
