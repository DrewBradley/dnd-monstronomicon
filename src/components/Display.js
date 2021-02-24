import React from 'react'
import { Link } from 'react-router-dom'

const Display = ({ monsterLinks }) => {
    return (
        <Link to="/monster/:name">
            {monsterLinks}
        </Link>
    )
}

export default Display