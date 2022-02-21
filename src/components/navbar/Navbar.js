import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = ({isMobile,setIsMobile}) => {

   
    return (
        <nav className="navbar" onClick={e=>e.stopPropagation()}>
            <h3 className="logo">Logo</h3>
            <ul
            onClick={e => e.stopPropagation()} className={isMobile ? "nav-links-mobile" : "nav-links"}>
                <Link to="/" className="home">
                    <li>Home</li>
                </Link> 

                <Link to="/about" className="about">
                    <li>About</li>
                </Link>

                <Link to="/contact" className="contact">
                    <li>Contact</li>
                </Link>

                <Link to="/skills" className="skills">
                    <li>Skills</li>
                </Link>

                <Link to="/signup" className="signup">
                    <li>Sign Up</li>
                </Link>

            </ul>
            <button
            onClick={() => setIsMobile(!isMobile)} className="mobile-menu-icon">
                    {isMobile ? <i className="fas fa-times"></i> : <i className="fas fa-bars"></i>}
            </button>
        </nav>
    )
}

export default Navbar
