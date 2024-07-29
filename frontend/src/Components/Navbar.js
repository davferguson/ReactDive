import React from 'react'
import './Navbar.css';
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div className="navbar">
        <div className="bg-img"></div>
        <ul>
            <li>
                <NavLink to='/'>Home</NavLink>
            </li>
            <li>
                <NavLink id='link2' to='/forums'>Forums</NavLink>
            </li>
            <li>
                <NavLink id='link3' to='/profile'>Profile</NavLink>
            </li>
        </ul>
        
    </div>
  )
}

export default Navbar