import React from 'react';
import { Navbar, Button } from 'react-bootstrap';
import { FaChartPie } from 'react-icons/fa';
import './styles/Header.css';

const Header = ({ onAnalyticsClick }) => {
  return (
    <Navbar bg="dark" variant="dark" sticky="top" fixed="top">
      <Navbar.Brand>
        <div className="logo">
          <img src="logo-white.png" alt="Logo" />
          <h1>Email Client</h1>
          <div className='analytics'>
            <Button variant="outline-light" onClick={onAnalyticsClick}>
              <FaChartPie />
            </Button>
          </div>
        </div>
      </Navbar.Brand>
    </Navbar>
  );
};

export default Header;
