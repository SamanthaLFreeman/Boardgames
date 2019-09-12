import React, { Component } from 'react';
import { getGames, getCategories } from '../../actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getPopularGames, getAllCategories } from '../../util/apiCalls';

export class App extends Component {
  componentDidMount() {
    const { getGames, getCategories } = this.props;
    getPopularGames()
      .then(data => getGames(data.games))
      .catch(error => console.log(error))

    getAllCategories()
      .then(data => getCategories(data.categories))
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
  bindActionCreators({ getGames, getCategories }, dispatch)
)

export default connect(null, mapDispatchToProps)(App);
