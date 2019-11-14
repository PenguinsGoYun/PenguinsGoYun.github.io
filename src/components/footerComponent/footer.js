import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer>
        <nav>
            <ul>
                <li className="first">
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/journey">Journey</Link>
                </li>
                <li>
                    <Link to="/projects">Projects</Link>
                </li>
                <li>
                    <Link to="/interests">Interests</Link>
                </li>
                <li className="last">
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
        </nav>
    </footer>
  );
}

export default Footer;