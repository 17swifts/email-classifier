import React from 'react';
import { Navbar, Container } from 'react-bootstrap';
import './Header.css';

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" sticky="top">
      <Container>
        <Navbar.Brand>
          <div className="logo">
            <img src="logo-white.png" alt="Logo" />
            <h1>Email Client</h1>
          </div>
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Header;
