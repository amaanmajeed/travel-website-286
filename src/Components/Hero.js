import React from 'react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <>
        <header class='header'>
            <nav class='navbar'>
                <div class="container">
                        <h1 class='logo lg-heading text-light'>WT</h1>
                        <ul class='nav-items'>
                          <li class="nav-item"><Link to="/">Home</Link></li>
                          <li class="nav-item"><Link to="/about">About</Link></li>
                          <li class="nav-item"><Link to="/contact">Contact</Link></li>
                        </ul>
                </div>
            </nav>
                <div class="header-content">
                    <h1 class='lg-heading text-light main-heading'>travel the world</h1>
                    <p class='text-light'>travel the world, experience the greateness, it's the best gift given by nature</p>
                    <Link to="/" class='btn btn-primary text-red md-heading'>Explore Places</Link>
                </div>
        </header>
    </>
  );
}
