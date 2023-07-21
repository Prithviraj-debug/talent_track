import React, { useState, useEffect, useContext } from 'react';
import logo from '../../assets/TalentTrack.png';
import './navbar.styles.css'
import avatar from '../../assets/avatar.png'
import close from '../../assets/close.svg'
import menu from '../../assets/menu.svg'
import { Fragment } from 'react';
import { Outlet, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import { UserContext } from "../../components/contexts/user.context";
import { signOutUser } from '../../utils/firebase.utils';

const Navbar = () => {
    const currentPath = useLocation().pathname;
    const onTop = () => {
        window.scrollTo(0, 0);
    }
    useEffect(() => {
        onTop();
    }, [currentPath])

    const { currentUser, setCurrentUser } = useContext(UserContext);
    console.log(currentUser);
    const signOutHandler = async () => {
        await signOutUser();
        setCurrentUser(null); 
    }

    const [toggle, setToggle] = useState(false)
    const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
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
                        <img src={logo} alt="logo" />
                    </Link>
                </div>

                <ul className="nav-links">
                    <Link to='/'>
                        <li key="home">Home</li>
                    </Link>

                    {
                        currentUser ? (
                            <a>
                                <li onClick={signOutHandler}>SIGN OUT </li>
                            </a>
                        ) : (
                        <Link to='/signin'>
                            <li key="sigin">Sign In</li>
                        </Link>
                        )
                    }
                    <Link to='/find'>
                        <li key="search">Search Candidate</li>
                    </Link>
                </ul>

                <div className="user">
                        { currentUser && (
                            <Link to='/profile'>
                                Update Profile
                            </Link>
                        ) }
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
                        {
                        currentUser ? (
                            <a>
                                <li onClick={signOutHandler}>SIGN OUT </li>
                            </a>
                        ) : (
                        <Link to='/signin'>
                            <li key="sigin">Sign In</li>
                        </Link>
                        )
                    }
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