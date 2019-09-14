import React from 'react';
import { Link } from 'react-router-dom';

export const Card = ({game, toggleFavorite}) => {
  return (
    <article className="card">
      <button onClick={() => toggleFavorite(game.id)}>Fav</button>
      <img className="card-img" src={game.image_url} alt={game.name} />
      <h2>{game.name}</h2>
      <Link to={`/card/${game.id}`} ><button>Details</button></Link>
    </article>
  )
}

export default Card;