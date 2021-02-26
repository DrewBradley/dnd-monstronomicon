import React from 'react'
import './Display.css'

const Display = ({ monsterLinks }) => {
    return (
        <div className="monster-list">
            {monsterLinks}
        </div>
    )
}

export default Display