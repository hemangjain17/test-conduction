import React from 'react'
import { Link } from 'react-router-dom';
import '../styles/Header.css';
import skillop from '../icons/Skillop.png'
import hamburgerImage from '../icons/hamburgerImage.png'

const Header = () => {
  return (
    <div className="header">
      <div className="header"> 
      <Link to="/">
        <div className="header-image">
          <img src={skillop} className="skillop-header-image"/>
        </div>
        <div className="skillop-header-text">
          Skillop
        </div>
      </Link>
      
      <div className="nav-bar">
        <Link to="/">
          <div className="quiz">
            Questions
          </div>
        </Link>
        <Link to="/response">
          <div className="response">
            Responses
          </div>
        </Link>
      </div> 

      <div className="side-menu">
        <div className="side-menu-btn">
          <img src={hamburgerImage} className="hamburger-image"/>
        </div>
      </div>

    </div>
    </div>
  )
}

export default Header
