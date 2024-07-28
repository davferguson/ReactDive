import React from 'react'
import './Navbar.css';
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div className="navbar">
     
        <NavLink to='/'>Home</NavLink>

        <NavLink to='/forums'>Forums</NavLink>

        <NavLink to='/profile'>Profile</NavLink>

    </div>
  )
}

export default Navbar