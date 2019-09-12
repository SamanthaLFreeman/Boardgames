import React, { Component } from 'react';
import { getGames } from '../../actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getPopularGames, getCategories } from '../../util/apiCalls';

export class App extends Component {
  componentDidMount() {
    const { getGames } = this.props;
    getPopularGames()
      .then(data => getGames(data.games))
      .catch(error => console.log(error))

    getCategories()
      .then(data => console.log(data))
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
