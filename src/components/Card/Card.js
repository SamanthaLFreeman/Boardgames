import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

export const Card = ({game, toggleFavorite, toggleOwned, ownedGames, favorites}) => {
  const isFavorite = favorites.map(favorite => favorite.id).includes(game.id);
  const isOwned = ownedGames.map(ownedGame => ownedGame.id).includes(game.id);
  const btnFavClass = isFavorite ? "btn-fav-active" : "btn-fav";
  const btnOwnClass = isOwned ? "btn-own-active" : "btn-own";
  return (
    <article className="card">
      <div className="card-btns">
        <button className={btnFavClass} onClick={() => toggleFavorite(game, isFavorite)}>Favorite</button>
        <button className={btnOwnClass} onClick={() => toggleOwned(game, isOwned)}>Own</button>
      </div>
      <img className="card-img" src={game.image_url} alt={game.name} />
      <div className="bottom-card">
        <h2 className="card-name">{game.name}</h2>
        <Link to={`/card/${game.id}`} ><button className="details-btn">Details</button></Link>
      </div>
    </article>
  )
}

export const mapStateToProps = state => ({
  favorites: state.favorites,
  ownedGames: state.ownedGames
})

export default connect(mapStateToProps, null)(Card);