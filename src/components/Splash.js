import React from 'react'
import './Splash.css'
import {Link} from 'react-router-dom'

const Splash = () => {
    return (
        <div className="splash">
            <h1>Welcome to</h1>
            <h1 className="splash-title">MONSTRONOMICON</h1>
            <Link to="/home" >
              <p className="go-home">
                Enter
              </p>
            </Link>
        </div>
    )
}

export default Splash