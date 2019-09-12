import React, { Component } from 'react';
import { getGames } from '../../actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

export class App extends Component {
  componentDidMount() {
    const { getGames } = this.props;
    fetch('https://www.boardgameatlas.com/api/search?order_by=popularity&ascending=false&client_id=SB1VGnDv7M')
      .then(response => response.json())
      .then(data => getGames(data.games))
      .catch(error => console.log(error))
  }
  
  render() {
    return(
      <div>
        <h1>Deck Building</h1>
      </div>
    )
  }

}

export const mapDispatchToProps = dispatch => (
  bindActionCreators({ getGames }, dispatch)
)

export default connect(null, mapDispatchToProps)(App);
