import React from "react";
import { Link } from "react-router-dom";
import logo from "./cocktail.png";
import SearcForm from "./SearcForm";
function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <Link to="/">
          <img src={logo} alt="DrinkME logo " className="logo" />
        </Link>
        <SearcForm />
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about-us">About Us</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
