/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import '../static/navbar.css';
 
const Navbar = () => {
    return(
        <nav className="navWrapper">
            <div className="container">
                <a className="navName">Schedule work</a>
                <ul>
                    <li><a href="/dashboard">Dashboard</a></li>
                    <li><a href="/projects">Projects</a></li>
                    <li><a href="/details">Details</a></li>
                    <li><a href="/logout">Logout</a></li>
                </ul>
            </div>
        </nav>
    )
}
export default Navbar;