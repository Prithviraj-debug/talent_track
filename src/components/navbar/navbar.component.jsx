import logo from '../../assets/TalentTrack.png';
import './navbar.styles.css'
import avatar from '../../assets/avatar.png'
import { Fragment } from 'react';
import { Outlet } from 'react-router';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
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
                    <img src={avatar} alt="" srcset="" />
                </div>
            </div>
        </nav>
        <Outlet />
        </Fragment>
    )
}

export default Navbar;