import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

export const Card = ({game, toggleFavorite, favorites}) => {
  const isFavorite = favorites.map(favorite => favorite.id).includes(game.id);
  const btnClass = isFavorite ? "btn-active" : "btn";
  return (
    <article className="card">
      <button className={btnClass} onClick={() => toggleFavorite(game, isFavorite)}>Fav</button>
      <img className="card-img" src={game.image_url} alt={game.name} />
      <h2>{game.name}</h2>
      <Link to={`/card/${game.id}`} ><button>Details</button></Link>
    </article>
  )
}

export const mapStateToProps = state => ({
  favorites: state.favorites
})

export default connect(mapStateToProps, null)(Card);