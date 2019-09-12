import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Card from '../../components/Card/Card'

export const CardContainer = ({games}) => {
  const displayCards = games.map(game => <Card game={game} key={game.id}/>)
  return (
    <section className="cards-container">
      {displayCards}
    </section>
  )
}

const mapStateToProps = state => ({
  games: state.games
})

export default connect(mapStateToProps, null)(CardContainer);