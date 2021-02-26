import React from 'react'
import { Link } from 'react-router-dom'
import Search from './Search'
import Filter from './Filter'
import ShowAllMonsters from './ShowAllMonsters'
import './Header.css'
import Ldragon from '../dragon.svg'
import Rdragon from '../dragonR.svg'

const Header = () => {
    return (
        <header>
            <div className="title">
              <img className="dragon" src={ Ldragon }/>
              <Link to="/" className="home-button">
                <h1>MONSTRONOMICON</h1>
              </Link>
              <img className="dragon" src={ Rdragon }/>
            </div>
            <div className="nav">
              <Search />
              <ShowAllMonsters />
              <Filter />
              <Link to="/encounter" className="encounter-button">Encounter</Link>
            </div>
        </header>
    )
}

export default Header