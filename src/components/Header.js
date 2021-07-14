import React from 'react';
// Here we are importing a CSS file as a dependency
import '../styles/Header.css';

function Header() {
  return (
    <header className="header">
      <h1>The Mind of Dana Merrill</h1>
      <h3>A Frankensteinian approach to development and project/program management.</h3>
    </header>
  );
}

export default Header;
