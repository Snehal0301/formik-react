import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
const Navbar = () => {
    return (
        <div className='navbar'>
            <div className="logo">
                Mamatha
            </div>
            <div className="links">
                <Link to='/'>SignUp</Link>
                <Link to='/login'>SignIn</Link>
            </div>
        </div>
    )
}

export default Navbar