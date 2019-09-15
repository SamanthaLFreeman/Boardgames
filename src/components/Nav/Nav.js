import React from 'react';
import { Link } from 'react-router-dom';

export const Nav = () => {
  return (
    <nav className="nav">
      <h1>Deck Building</h1>
      <div className="nav-btns">
        <Link to='/favorites'><button className="nav-btn">View Favorites</button></Link>
        <Link to='/owned'><button className="nav-btn">Owned Collection</button></Link>
        <Link to='/searchform'><button className="nav-btn">Search</button></Link>
      </div>
    </nav>
  )
}

export default Nav;