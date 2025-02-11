import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav>
            <ul>
                <li><Link to="/">Dashboard</Link></li>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/register">Register</Link></li>
                <li><Link to="/projects">Projects</Link></li>
                <li><Link to="/reports">Reports</Link></li>
                <li><Link to="/upload">Upload</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;
