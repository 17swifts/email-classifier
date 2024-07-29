import React from 'react';
import { Navbar } from 'react-bootstrap';
import './styles/Header.css';

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" sticky="top" fixed="top">
      <Navbar.Brand>
        <div className="logo">
          <img src="logo-white.png" alt="Logo" />
          <h1>Email Client</h1>
        </div>
      </Navbar.Brand>
    </Navbar>
  );
};

export default Header;
