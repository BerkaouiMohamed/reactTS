import React from 'react'
import { Link } from 'react-router-dom'
import "../styles/navbar.css"

function Navbar() {
  return (
    <div className='navbar-container'>
        <h2>logo</h2>
        <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/order'>order</Link></li>
            <li><Link to='/dashobord'>dashobord</Link></li>
        </ul>
      
    </div>
  )
}

export default Navbar
