import React, { Component } from 'react';
import { getGames, getCategories, addFavorite, removeFavorite } from '../../actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getPopularGames, getAllCategories } from '../../util/apiCalls';
import CardContainer from '../CardContainer/CardContainer';
import CardDetails from '../../components/CardDetails/CardDetails';
import Nav from '../../components/Nav/Nav';
import SearchForm from '../SearchForm/SearchForm';
import { Route } from 'react-router-dom';


export class App extends Component {
  componentDidMount() {
    const { getGames, getCategories } = this.props;
    getPopularGames()
      .then(data => this.cleanUpGames(data.games))
      .then(data => getGames(data))
      .catch(error => console.log(error))

    getAllCategories()
      .then(data => getCategories(data.categories))
      .catch(error => console.log(error))
  }

  toggleFavorite = (id, bool) => {
    const { addFavorite, removeFavorite } = this.props;
    if(!bool) {
      addFavorite(id)
    } else {
      removeFavorite(id)
    }
  }

  cleanUpGames = games => {
    return games.map(game => {
      return {
        id: game.id,
        name: game.name,
        year_published: game.year_published,
        min_players: game.min_players,
        max_players: game.max_players,
        min_playtime: game.min_playtime,
        max_playtime: game.max_playtime,
        description_preview: game.description_preview,
        image_url: game.image_url,
        primary_publisher: game.primary_publisher,
        categoriesIds: game.categories,
        rules_url: game.rules_url
      }
    })
  }
  
  render() {
    const { currentGames } = this.props
    return(
      <main>
        <Nav />
        <SearchForm cleanUpGames={this.cleanUpGames} />
        <Route exact path='/' render={() => <CardContainer toggleFavorite={this.toggleFavorite}/>} />
        <Route exact path='/favorites' render={() => <CardContainer toggleFavorite={this.toggleFavorite} favoriteCheck={true} />} />
        <Route path='/card/:id' render={({ match }) => {
          let targetCard = currentGames.find(card => card.id === match.params.id);
          return <CardDetails {...targetCard} />
        }} />
      </main>
    )
  }

}

export const mapStateToProps = state => ({
  currentGames: state.games,
  categories: state.categories
})

export const mapDispatchToProps = dispatch => (
  bindActionCreators({ getGames, getCategories, addFavorite, removeFavorite }, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(App);
