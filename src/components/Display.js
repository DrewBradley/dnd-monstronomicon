import React from 'react'
import { Link } from 'react-router-dom'

const Display = ({ monsterLinks }) => {
    return (
        <div className="monster-list">
            {monsterLinks}
        </div>
    )
}

export default Display