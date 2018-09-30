import React from 'react'
import { NavLink } from 'react-router-dom'
import './style.css'

const Header = () => (
  <header>
    <nav>
      <ul>
        <li><NavLink to="/people" activeClassName="active">Characters</NavLink></li>
        <li><NavLink to="/planets" activeClassName="active">Planets</NavLink></li>
        <li><NavLink to="/starships" activeClassName="active">Starships</NavLink></li>
        <li><NavLink to="/vehicles" activeClassName="active">Vehicles</NavLink></li>
        <li><NavLink to="/species" activeClassName="active">Species</NavLink></li>
      </ul>
    </nav>
  </header>
)

export default Header;