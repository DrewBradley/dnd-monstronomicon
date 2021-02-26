import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getOneMonster } from '../actions/actions'
import PropTypes from 'prop-types';
import './Monster.css'

class Monster extends Component {

    componentDidMount() {
        this.props.getOneMonster(this.props.location.state.url)
    }
    
    render() {
        console.log(this.props.monster)
        const monster = this.props.monster
        const actions = monster.actions.map(action => {
            return (
                <div>
                    <p className="stat-detail">{action.name}: {action.desc}</p>
                </div>
            )
        })
        
        if (this.props.monster.url === this.props.location.state.url) {
            return (
                <div className="monster-stats">
                    <p className="one-stat name">NAME: <span>{monster.name}</span></p>
                    <p className="one-stat type">TYPE: <span>{monster.type}</span></p>
                    <p className="one-stat subtype">SUBTYPE: <span>{monster.subtype}</span></p>
                    <p className="one-stat size">SIZE: <span>{monster.size}</span></p>
                    <p className="one-stat xp">XP: <span>{monster.xp}</span></p>
                    <p className="one-stat actions">ACTIONS: <span>{actions}</span></p>
                    <p className="one-stat alignment">ALIGNMENT: <span>{monster.alignment}</span></p>
                    <p className="one-stat armor-class">ARMOR CLASS: <span>{monster.armor_class}</span></p>
                    <p className="one-stat challenge-rating">CHALLENGE RATING: <span>{monster.challenge_rating}</span></p>
                    <p className="one-stat charisma">CHARISMA: <span>{monster.charisma}</span></p>
                    <p className="one-stat constitution">CONSTITUTION: <span>{monster.constitution}</span></p>
                    <p className="one-stat dexterity">DEXTERITY: <span>{monster.dexterity}</span></p>
                    <p className="one-stat hit-dice">HIT DICE: <span>{monster.hit_dice}</span></p>
                    <p className="one-stat hit-points">HIT POINTS: <span>{monster.hit_points}</span></p>
                    <p className="one-stat intelligence">INTELLIGENCE: <span>{monster.intelligence}</span></p>
                    <p className="one-stat languages">LANGUAGES: <span>{monster.languages}</span></p>
                    <p className="one-stat strength">STRENGTH: <span>{monster.strength}</span></p>
                    <p className="one-stat wisdom">WISDOM: <span>{monster.wisdom}</span></p>
                    <br></br>
                    <button>click to add to encounter</button>
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

export default connect(mapStateToProps, {getOneMonster})(Monster)