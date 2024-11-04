import React from 'react'
import './Navbar.css'
const Navbar = () => {
  return (
    <div>
        <nav className="navbar">
            <ul className="nav-list">
            <li className="nav-item">Home</li>
            <li className="nav-item">About</li>
            <li className="nav-item">Services</li>
            <li className="nav-item">Contact</li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar