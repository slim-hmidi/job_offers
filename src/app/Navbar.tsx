import React from 'react';
import {Link} from 'react-router-dom';


const Navbar = ():JSX.Element => {
  return (
    <nav className="navbar navbar-expand-xl bg-dark navbar-dark sticky-top">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <Link to="/" className="nav-link">Home</Link>
      </li>
      <li className="nav-item">
      <Link to="/jobs" className="nav-link">Jobs</Link>
      </li>
    </ul>
    </nav>
  )
}

export default Navbar;