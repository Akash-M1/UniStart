import React, { Component } from 'react';
import './Navbar.css';

function Navbar(props) {
  return (
    <header className={`navbarContainer d-flex align-items-center ${props.className}`}>
      <div className="m-3">
       UniStart
      </div>
    </header>
  );
}


export default Navbar;