import React from 'react'
import { Link } from 'react-router-dom'
import Search from './Search'
import Filter from './Filter'

const Header = () => {
    return (
        <div>Header
            <Search />
            <Filter />
            <Link to="/encounter">Encounter</Link>
            <Link to="/">Home</Link>
        </div>
    )
}

export default Header