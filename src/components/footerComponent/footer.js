import React from 'react';
// import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer>

      {/*
      <ul className="nav justify-content-center">
        <li className="nav-item">
          <Link to="/" className="nav-link">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/journey" className="nav-link">Journey</Link>
        </li>
        <li className="nav-item">
          <Link to="/projects" className="nav-link">Projects</Link>
        </li>
        <li className="nav-item">
          <Link to="/interests" className="nav-link">Interests</Link>
        </li>
        <li className="nav-item">
          <Link to="/contact" className="nav-link">Contact</Link>
        </li>
      </ul>
      */}
      
      <p>
        <small>
          Built using React and Bootstrap.
          <br></br> &copy; 2019 Yeon Kim. All rights reserved.
        </small>
      </p>

    </footer>
  );
}

export default Footer;