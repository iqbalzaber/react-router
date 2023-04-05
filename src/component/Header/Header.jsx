import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
import ActiveLink from '../ActivLinkl/ActiveLink';
const Header = () => {
    return (
        <nav>
            <ActiveLink to="/">Home</ActiveLink>
            <ActiveLink to= "friends">friends</ActiveLink>
            <ActiveLink to="/post">post</ActiveLink>
            <ActiveLink to="/About">About</ActiveLink>
            <ActiveLink to="/Contact">Contact</ActiveLink>
        </nav>
    );
};

export default Header;