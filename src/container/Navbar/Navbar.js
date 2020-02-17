/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import '../../static/navbar.css';

import { NavLink } from 'react-router-dom';
 
const Navbar = () => {
    return(
        <nav className="navWrapper">
            <div className="container">
                <a className="navName">Schedule work</a> 
                <ul>
                    <li><NavLink to="/dashboard">Dashboard</NavLink></li>
                    <li><NavLink to="/projects">Projects</NavLink></li>
                    <li><NavLink to="/details">Details</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}
export default Navbar;