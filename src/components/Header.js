import React from 'react'
import { Link } from 'react-router-dom'
import Search from './Search'
import Filter from './Filter'
import ShowAllMonsters from './ShowAllMonsters'
import './Header.css'

const Header = () => {
    return (
        <header>
            <Search />
            <ShowAllMonsters />
            <Filter />
            <Link to="/encounter" className="encounter-button">Encounter</Link>
            <Link to="/" className="home-button">Home</Link>
        </header>
    )
}

export default Header