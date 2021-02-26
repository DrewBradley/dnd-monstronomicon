import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getOneMonster, addToEncounter } from '../actions/actions'
import PropTypes from 'prop-types';
import './Monster.css'

class Monster extends Component {

    componentDidMount() {
        this.props.getOneMonster(this.props.location.state.url)
    }

    render() {
        if (this.props.monster.url === this.props.location.state.url) {
            const monster = this.props.monster
            const subtype = monster.subtype ? 
                <p className="one-stat subtype">SUBTYPE: <span>{monster.subtype}</span></p> : 
                <p className="one-stat subtype">SUBTYPE: </p>
            const actions = monster.actions.map(action => {
                return (
                    <div>
                        <p className="stat-detail">{action.name}: {action.desc}</p>
                    </div>
                )
            })
            if (monster.specialAbilities) {
                var specialAbilities = monster.special_abilities.map(ability => {
                    return (
                        <div>
                            <p className="stat-detail">{ability.name}: {ability.desc}</p>
                        </div>
                    )
                })
            }
            const proficiencies = monster.proficiencies.map(proficiency => {
                return (
                    <div>
                        <p className="stat-detail">{proficiency.proficiency.name}: {proficiency.value}</p>
                    </div>
                )
            })

            // senses is an object ... of course. speed is also an object.
            // const senses = monster.senses.map(sense => {
                //     return (
                    //         <div>
                    //             <p className="stat-detail">{sense}</p>
                    //         </div>
                    //     )
                    // })

            const CI = monster.condition_immunities.map(CI => {
                return monster.condition_immunities ? 
                <div><p className="stat-detail">{CI.name}</p></div> :
                <div><p className="stat-detail">CONDITION IMMUNITIES: </p></div>
            })
            const DI = monster.damage_immunities.map(DI => {
                return monster.damage_immunities ? 
                <div><p className="stat-detail">{DI}</p></div> :
                <div><p className="stat-detail">DAMAGE IMMUNITIES: </p></div>
            })
            const DR = monster.damage_resistances.map(DR => {
                return monster.damage_resistances ? 
                <div><p className="stat-detail">{DR}</p></div> :
                <div><p className="stat-detail">DAMAGE RESISTANCES: </p></div>
            })    

            const DV = monster.damage_vulnerabilities.map(DV => {
                return monster.damage_vulnerabilities ? 
                <div><p className="stat-detail">{DV}</p></div> :
                <div><p className="stat-detail">DAMAGE VULNERABILITIES: </p></div>
            })

            if (monster.legendary_actions) {
                var legendaryActions = monster.legendary_actions.map(action => {
                    return (
                        <div>
                            <p className="stat-detail">{action.name}: {action.desc}</p>
                        </div>
                    )
                })
            }
            const legendary = monster.legendary_actions ? 
                <p className="one-stat legendary-actions">LEGENDARY ACTIONS: <span>{legendaryActions}</span></p> : <p className="one-stat legendary-actions">LEGENDARY ACTIONS: <span></span></p>

            const special = monster.special_abilities ? <p className="one-stat special-abilities">SPECIAL ABILITIES: <span>{specialAbilities}</span></p> : <p className="one-stat special-abilities">SPECIAL ABILITIES: </p>


            return (
                <div className="monster-stats">
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
                        <p className="one-stat proficiencies">PROFICIENCIES: <span>{proficiencies}</span></p>
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
                        <p className="one-stat damage-vulnerabilities">DAMAGE VULNERABILITIES: <span>{DV}</span></p>
                        <p className="one-stat damage-resistances">DAMAGE RESISTANCES: <span>{DR}</span></p>
                        <p className="one-stat condition-immunities">CONDITION IMMUNITIES: <span>{CI}</span></p>
                        <p className="one-stat damage-immunities">DAMAGE IMMUNITIES: <span>{DI}</span></p>
                    </div>
                    
                    <p className="one-stat actions">ACTIONS: <span>{actions}</span></p>
                    <div className="legendary">
                        {legendary}
                    </div>
                        {special}
                    
                    {/* <p className="one-stat senses">SENSES: <span>{senses}</span></p> */}
                    <br></br>
                    <button>click to add to encounter</button>

                    <div className="legendary">
                        {legendary}
                    </div>

                    {special}
                    
                    {/* <p className="one-stat senses">SENSES: <span>{senses}</span></p> */}
                    <br></br>
                    <button className="add-button" onClick={this.props.addToEncounter}>ADD TO ENCOUNTER</button>
                </div>
            )
        } else {
            return null
        }
    }
}

Monster.propTypes = {
  getOneMonster: PropTypes.func.isRequired,
  location: PropTypes.object.isRequired,
  monster: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    monster: state.monsters.monster
})

export default connect(mapStateToProps, { getOneMonster, addToEncounter })(Monster)