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
        <header className="header">
            <div className="title">
              <img className="dragon" src={ Ldragon } alt="a dragon"/>
              <Link to="/" className="app-name"><h1>MONSTRONOMICON</h1></Link>
              <img className="dragon" src={ Rdragon } alt="a dragon"/>
            </div>
            <div className="nav">
              <Search />
              <ShowAllMonsters />
              <Filter />
              <div className="nav-button">
                <Link to="/encounter" className="encounter-button">Encounter</Link>
              </div>
            </div>
        </header>
    )
}

export default Header