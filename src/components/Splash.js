import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Splash.css'

class Splash extends Component {
  render() {
     return (
        <div className="splash">
            <h1>Welcome to</h1>
            <h1 className="splash-title">MONSTRONOMICON</h1>
            <Link to="/" >
              <p className="go-home">
                Enter
              </p>
            </Link>
        </div>
    )
  } 
}

export default Splash