import React, { useState } from 'react';
import Logo from '../assets/rysLogo.png';
import { Link } from 'react-router-dom';
import ReorderIcon from '@mui/icons-material/Reorder';
import '../styles/Navbar.css';

function Navbar() {
    const [openLinks, setOpenLinks] = useState(false);

    const toggleNavbar = () => {
        setOpenLinks(!openLinks);
    };

  return (
    <div className="navbar">
        <div className="leftSide" id={openLinks ? "open" : "close"}>
        <Link to="/">
            <img src={Logo}/>
        </Link>
            <div className="hiddenLinks">
                <Link to="/"> Home </Link>
                <Link to="/projects"> Projects </Link>
                <Link to="/about"> About </Link>
            </div>
        </div>
        <div className="rightSide">
            <div className="navbarLinks">
                <Link to="/"> Home </Link>
                <Link to="/projects"> Projects </Link>
                <Link to="/about"> About </Link>
            </div>
            <button onClick={toggleNavbar}>
                <ReorderIcon/>
            </button>
        </div>
    </div>
  )
}

export default Navbar;