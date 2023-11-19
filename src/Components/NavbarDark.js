import React from 'react';
import { Link } from 'react-router-dom';

export default function NavbarDark() {
  return (
      <>
        <nav class='navbar bg-dark'>
            <div class="container">
                    <h1 class='logo lg-heading text-light'>WT</h1>
                    <ul class='nav-items'>
                      <li class="nav-item"><Link to="/">Home</Link></li>
                      <li class="nav-item"><Link to="/about">About</Link></li>
                      <li class="nav-item"><Link to="/contact">Contact</Link></li>
                    </ul>
            </div>
        </nav>
      </>
  );
}
