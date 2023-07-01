import React, { useState, useEffect } from 'react';
import logo from '../../assets/TalentTrack.png';
import './navbar.styles.css'
import avatar from '../../assets/avatar.png'
import close from '../../assets/close.svg'
import menu from '../../assets/menu.svg'
import { Fragment } from 'react';
import { Outlet } from 'react-router';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [toggle, setToggle] = useState(false)
    const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Replace this with the actual loading time of your assets
  }, []);
    return (
        isLoading ? (
            <div className="loading">
                <div className="loader" />
            </div>
        ) : (
        <Fragment>
        <nav>
            <div className='navbar'>
                <div className="logoSection">
                    <Link to='/'>
                        <img src={logo} alt="logo" srcset="" />
                    </Link>
                </div>

                <ul className="nav-links">
                    <Link to='/'>
                        <li>Home</li>
                    </Link>
                    <Link to='/signin'>
                        <li>Sign In</li>
                    </Link>
                    <Link to='/find'>
                        <li>Search Candidate</li>
                    </Link>
                </ul>

                <div className="user">
                    <p>Welcome <span></span></p>
                    <img src={avatar} alt="user" />
                </div>

                <img 
                className="menu" 
                src={toggle ? close : menu} 
                alt="menu" 
                onClick={() => setToggle((prev) => !prev)}  />

                <div className={toggle ? "mobile-nav" : "hide"}>
                    <ul className="mobile-nav-links">
                        <Link to='/'>
                            <li>Home</li>
                        </Link>
                        <Link to='/signin'>
                            <li>Sign In</li>
                        </Link>
                        <Link to='/find'>
                            <li>Search Candidate</li>
                        </Link>
                    </ul>
                    
                    <div className="user">
                        <p>Welcome <span></span></p>
                        </div> 
                        </div>
            </div>
        </nav>
        <Outlet />
        </Fragment>
    )
    )
}

export default Navbar;