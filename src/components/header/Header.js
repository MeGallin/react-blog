import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/admin">Admin</Link>
        <Link to="/about">About</Link>
      </nav>
    </header>
  );
}

export default Header;
// Notes Do about error handling
// https://www.youtube.com/watch?v=aKOQtGLT-Yk
