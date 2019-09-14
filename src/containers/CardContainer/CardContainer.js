import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Card from '../../components/Card/Card'

export const CardContainer = ({games, toggleFavorite, toggleOwned, favoriteCheck, favorites}) => {
  const allCards = games.map(game => <Card game={game} key={game.id} toggleFavorite={toggleFavorite} toggleOwned={toggleOwned} />);
  const favoriteCards = favorites.map(game => <Card game={game} key={game.id} toggleFavorite={toggleFavorite} toggleOwned={toggleOwned} />);
  const displayCards = !favoriteCheck ? allCards : favoriteCards;
  return (
    <section className="cards-container">
      {displayCards}
    </section>
  )
}

const mapStateToProps = state => ({
  games: state.games,
  favorites: state.favorites
})

export default connect(mapStateToProps, null)(CardContainer);