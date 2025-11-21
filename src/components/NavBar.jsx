import React from 'react'
import { NavLink } from 'react-router-dom';
import './NavBar.css';
export default function NavBar() {
  return (
    <header className="navbar">
      <div className="Nav_cine">
        <h1>Cineverse</h1>
      </div>
      <nav className="nav_links">
        <NavLink to="/">
          Home
        </NavLink>
        <NavLink to="/Contact" >
          Contact us
        </NavLink>
      </nav>
    </header>
  )
}