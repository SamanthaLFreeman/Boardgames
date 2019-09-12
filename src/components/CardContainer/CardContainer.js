import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

export const CardContainer = () => {
  return (
    <section></section>
  )
}

const mapStateToProps = state => ({
  games: state.games
})

export default connect(mapStateToProps, null)(CardContainer);