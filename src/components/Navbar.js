import { HashRouter, Link, NavLink } from 'react-router-dom'
import { useState } from 'react';
import React from 'react';


import '../styles/Navbar.css'
import { TiThMenu } from "react-icons/ti";
import { TiTimes } from "react-icons/ti";


const Navbar = () => {
    const [showMobileMenu, setShowMobileMenu] = useState(false)

    let sideNavbar
    let sideNavbutton
    var r = document.querySelector(':root');

    if (showMobileMenu){
        sideNavbar =
        <ul className="sideNavbar">
            <li><NavLink to="/" onClick={() => setShowMobileMenu(!showMobileMenu)} >about</NavLink></li>
            <li><NavLink to="/blog" onClick={() => setShowMobileMenu(!showMobileMenu)}>blog</NavLink></li>
        </ul>

        sideNavbutton =
        <TiTimes
            onClick={() => setShowMobileMenu(!showMobileMenu)}
            size={50}
            fill={getTextColor()}
        />
    } else {
        sideNavbutton =
        <TiThMenu
            onClick={() => setShowMobileMenu(!showMobileMenu)}
            size={50}
            fill={getTextColor()}
        />
    }

    function getTextColor() {
        var rs = getComputedStyle(r);
        return rs.getPropertyValue('--text-color');
      }

    return (
    <div className='nav'>
        <nav className='navBar'>
            <ul className='titleNav'>
                <li className='Title'><Link to="/">ali hamid</Link></li>
            </ul>

            <ul className="navLinks">
                <li><NavLink to="/" activeClassName="inactive">about</NavLink></li>
                <li><NavLink to="/blog" activeClassName="inactive">blog</NavLink></li>
            </ul>

            <span className="mobileButton">
                { sideNavbutton }
            </span>

            { sideNavbar }
        </nav>
    </div>
    );
}

export default Navbar;