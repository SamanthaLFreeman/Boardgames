import React from 'react';

export const Card = ({game}) => {
  return (
    <article className="card">
      <img className="card-img" src={game.image_url} alt={game.name} />
      <h2>{game.name}</h2>
    </article>
  )
}

export default Card;