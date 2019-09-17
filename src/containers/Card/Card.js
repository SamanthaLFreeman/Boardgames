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
      <div className="card-top">
        <div className="card-btns">
          <button className={btnFavClass} onClick={() => toggleFavorite(game, isFavorite)}></button>
          <button className={btnOwnClass} onClick={() => toggleOwned(game, isOwned)}></button>
        </div>
        <img className="card-img" src={game.image_url} alt={game.name} />
        <h2 className="card-name">{game.name}</h2>
      </div>
      <div className="bottom-card">
        <Link to={`/card/${game.id}`} ><button className="details-btn">DETAILS</button></Link>
      </div>
    </article>
  )
}

export const mapStateToProps = state => ({
  favorites: state.favorites,
  ownedGames: state.ownedGames
})

export default connect(mapStateToProps, null)(Card);