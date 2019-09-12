import React from 'react';
import { Link } from 'react-router-dom';

export const Card = ({game}) => {
  return (
    <Link to={`/card/${game.id}`} >
    <article className="card">
      <img className="card-img" src={game.image_url} alt={game.name} />
      <h2>{game.name}</h2>
    </article>
    </Link>
  )
}

export default Card;