import React from 'react';
import { Link } from 'react-router-dom';

export const Nav = () => {
  return (
    <nav>
      <h1>Deck Building</h1>
      <Link to='/favorites'><button>View Favorites</button></Link>
      <button>Owned Collection</button>
      <Link to='/search'><button>Search</button></Link>
    </nav>
  )
}

export default Nav;