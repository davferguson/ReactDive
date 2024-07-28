import React from 'react'
import './Navbar.css';
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className="navbar">
     
        <Link to='/'>Home</Link>

        <Link to='/forums'>Forums</Link>

        <Link to='/profile'>Profile</Link>

    </div>
  )
}

export default Navbar