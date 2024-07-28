import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src="logo.png" alt="Logo" />
        <h1>Email Client</h1>
      </div>
    </header>
  );
};

export default Header;
