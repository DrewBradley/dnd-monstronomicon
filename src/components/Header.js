import React from 'react'
import { Link } from 'react-router-dom'
import Search from './Search'
import Filter from './Filter'
import './Header.css'

const Header = () => {
    return (
        <header>Header
            <Search />
            <Filter />
            <Link to="/encounter">Encounter</Link>
            <Link to="/">Home</Link>
        </header>
    )
}

export default Header