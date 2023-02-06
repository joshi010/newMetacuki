import React from "react";
import './Nav.css';
import logo from './logo1.png';
import { Link } from 'react-router-dom';

export default function Nav(){
    const handleClick = () => {
        const nav = document.querySelector('.lel');
        nav.classList.toggle('active');
    }

    return(
        <nav>
            <div className="logo-container">
                <img src={logo} alt="logo" />
            </div>

            <ul className="lel">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/projects" title="See all Cuki Projects">Projects</Link></li>
                <li><Link to='/about' title="Learn More About Us">About</Link></li>
                <li><Link to='/shop' title="Shop">Shop</Link></li>
            </ul>

            <div className="ham" onClick={handleClick}>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </div>
        </nav>
    )
}