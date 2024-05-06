import React from 'react';
import { Link } from 'react-router-dom';
import './navBar.css';

const NavBar = () => {
  return (
    <nav className="main-nav">
      <Link to="/Home" className="main-nav-logo">
        <img
          className="main-nav-logo-image"
          src="./img/argentBankLogo.png"
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      <div>
        <Link to="/SignIn" className="main-nav-item">
          <i className="fa fa-user-circle"></i>
          Sign In
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;