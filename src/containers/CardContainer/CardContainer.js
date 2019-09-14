import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Card from '../../components/Card/Card'

export const CardContainer = ({games, toggleFavorite, toggleOwned, type, ownedGames, favorites}) => {
  let newType
  if(type === 'games') {
    newType = games
  } else if (type === 'favorites') {
    newType = favorites
  } else {
    newType = ownedGames
  }
  const displayCards = newType.map(game => <Card game={game} key={game.id} toggleFavorite={toggleFavorite} toggleOwned={toggleOwned} />);
  return (
    <section className="cards-container">
      {displayCards}
    </section>
  )
}

const mapStateToProps = state => ({
  games: state.games,
  favorites: state.favorites,
  ownedGames: state.ownedGames
})

export default connect(mapStateToProps, null)(CardContainer);