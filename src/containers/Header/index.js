import React from 'react'
import { NavLink } from 'react-router-dom'
import './style.css'

const Header = () => (
  <header>
    <nav>
      <ul>
        <li><NavLink to="/characters" activeClassName="active" onlyActiveOnIndex>Characters</NavLink></li>
        <li><NavLink to="/planets" activeClassName="active" onlyActiveOnIndex>Planets</NavLink></li>
      </ul>
    </nav>
  </header>
)

export default Header;