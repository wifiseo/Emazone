import React from 'react';
import logo from '../../images/logo.png'
import './Header.css'
const Header = () => {
    return (
        <div className='header'>
            <div className='mein'>
                <nav>
                    <ul>
                        <li><a href="Home">Home</a></li>
                        <li><a href="Products">Products</a></li>
                        <li><a href="Account">Account</a></li>
                        <li><a href="Cart">Cart</a></li>
                        <li><a href="About">About</a></li>
                    </ul>
                </nav>
                <div className='searchArea'>
                    <input className='searchInput' placeholder='Seach Your product Here' type="text" />
                    <input className='searchBtn' type="button" value="Search" />
                </div>
            </div>
                <div className='headLogo'>
                <img src={logo} alt="This is the logo" />
            </div>
        </div>
    );
};

export default Header;